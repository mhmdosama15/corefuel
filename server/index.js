import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import Video from "./model/video.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

connectDB();
/* LEGS
Calf raise (calves)
https://drive.google.com/file/d/1p4YgzFEPoy4fOqGpwv3qusVKxTNZFW3K/view?usp=sharing
Setup: Stand on a calf raise machine or use a raised surface like a step. Place the balls of your feet on the edge, with your heels hanging off.
Starting Position: Keep your legs straight and your torso upright. For additional resistance, you can hold a barbell or dumbbells.
Raise: Push through the balls of your feet, lifting your body upwards as high as possible, extending your ankles.
Lower: Slowly lower your body back down, allowing your heels to drop below the level of the step.
Repeat: Maintain steady breathing and repeat for the desired reps.
Tip: Focus on a full range of motion, both when raising and lowering your body, to target the calves effectively.


Leg Curl (hamstrings)
https://drive.google.com/file/d/1CvBNRJS_ODGNdTBdtg0NS2_fbhRT3KGj/view?usp=sharing
Setup: Lie face down on the leg curl machine, ensuring that your knees align with the machine's pivot point. Place the pads on your lower calves just above your ankles.
Starting Position: Keep your feet flexed and your legs fully extended. Hold the handles or place your hands at your sides for support.
Curl: Curl your legs upwards by bending your knees, bringing your heels towards your glutes.
Return: Slowly lower your legs back to the starting position, keeping the movement controlled.
Repeat: Maintain steady breathing and repeat for the desired reps.
Tip: Do not jerk or use momentum. Focus on engaging your hamstrings throughout the movement.


Leg Extensions (quads)
https://drive.google.com/file/d/1cFCyfEIqSq_jAZWZZ028q_s-4h0rcTbh/view?usp=sharing
Leg Extension
Setup: Sit on the leg extension machine with your back firmly against the pad. Adjust the pad so that it rests just above your ankles, and ensure your knees align with the machine's pivot point.
Starting Position: Keep your feet flexed and your knees at a 90-degree angle. Your arms should rest comfortably at your sides or on the handles.
Extension: Extend your legs slowly, pushing the pad upwards, ensuring your knees are fully straightened without locking them.
Return: Lower the weight back to the starting position in a controlled manner, keeping tension on your quadriceps.
Repeat: Maintain steady breathing and repeat for the desired reps.
Tip: Focus on a slow and controlled movement, especially when lowering the weight, to maximize muscle engagement.

Squats (quads, hamstrings)
https://drive.google.com/file/d/1IuC_X9TcMYTyz07rczGEhY7Zk0GrEnLU/view?usp=sharing
Setup: Stand with your feet shoulder-width apart, with your toes slightly turned outward. Place the barbell across your upper traps or use a smith machine if needed.
Starting Position: Keep your chest up, core engaged, and your back straight. Position your knees in line with your toes.
Descent: Lower your body by bending your hips and knees, keeping your chest lifted. Aim for a depth where your thighs are parallel to the floor, or go deeper if flexibility allows.
Ascent: Push through your heels and extend your legs to return to the starting position.
Repeat: Maintain steady breathing and repeat for the desired reps.
Tip: Focus on depth and form rather than rushing the movement. Keep your knees aligned with your toes.



*/
const videoData = [
  {
    title: "Calf Raise",
    videoUrlID: "1p4YgzFEPoy4fOqGpwv3qusVKxTNZFW3K",
    description:
      "Setup: Stand on a calf raise machine or use a raised surface like a step. Place the balls of your feet on the edge, with your heels hanging off. Starting Position: Keep your legs straight and your torso upright. For additional resistance, you can hold a barbell or dumbbells. Raise: Push through the balls of your feet, lifting your body upwards as high as possible, extending your ankles. Lower: Slowly lower your body back down, allowing your heels to drop below the level of the step. Repeat: Maintain steady breathing and repeat for the desired reps. Tip: Focus on a full range of motion, both when raising and lowering your body, to target the calves effectively.",
    category: "legs",
    subCategory: "calves",
  },
];

const testData = async () => {
  try {
    await Video.insertMany(videoData);
    console.log("Data inserted successfully");
  } catch (error) {
    console.log(error);
  }
};

// testData();

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
const PORT = 8000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
