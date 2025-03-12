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
/* SHOULDER

*/
const videoData = [
  {
    title: "Arnold Shoulder Press",
    videoUrlID: "1NyhOdaOCZT4GkXwJhG1JIJ-vjYxtbslZ",
    description:
      "Setup: Sit on a bench with a dumbbell in each hand at chest height, palms facing you. Starting Position: Rotate your palms outward as you press the dumbbells overhead. Press: Fully extend your arms, turning your palms forward at the top. Lower: Reverse the motion back to the starting position. Repeat: Maintain steady breathing and repeat for desired reps. Tip: Focus on controlled rotation for better shoulder engagement.",
    category: "shoulders",
    subCategory: "front delt",
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
