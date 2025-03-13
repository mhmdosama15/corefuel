import User from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Metrics from "../model/metrics.js";
export const createUser = async (req, res) => {
  try {
    const { firstName, username, email, password, metricsData } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      firstName,
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    const newMetrics = new Metrics({
      userId: newUser._id,
      ...metricsData,
    });
    await newMetrics.save();
    newUser.metrics = newMetrics._id;
    await newUser.save();
    const token = jwt.sign({ userId: newUser._id }, process.env.SECRET_KEY, {
      expiresIn: "5d",
    });
    // res.cookie("token", token, {
    //   httpOnly: true,
    //   // secure: true,
    //   sameSite: "none",
    // });

    return res
      .status(201)
      .json({ message: "User created successfully", token, user: newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating user" });
  }
};

export const addUsername = async (req, res) => {
  try {
    const userId = req.userId;
    const { username } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.username = username;
    await user.save();
    return res.status(200).json({ message: "Username added successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error adding username" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "5d",
    });

    // res.cookie("token", token, {
    //   httpOnly: true,
    //   // secure: true,
    //   sameSite: "none",
    // });
    return res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error logging in" });
  }
};

// verify user
export const verifyUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const verifiedToken = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = verifiedToken.userId;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error authenticating user" });
  }
};
