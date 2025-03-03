import User from "../model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Metrics from "../model/metrics";
export const createUser = async () => {
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
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating user" });
  }
};

export const loginUser = async () => {
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
      expiresIn: "10d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      // secure: true,
      sameSite: "none",
    });
    return res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error logging in" });
  }
};
