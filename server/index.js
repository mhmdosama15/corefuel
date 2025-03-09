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
const videoData = [
  {
    title: "Paris Video",
    videoUrlID: "1CcZz9e4Q00K8D3HN8sB4vagCj5emXeuT",
    description: "Paris Video",
    category: "chest",
    subCategory: "middle pec",
  },
  {
    title: "Paris Video 2",
    videoUrlID: "1CcZz9e4Q00K8D3HN8sB4vagCj5emXeuT",
    description: "Paris Video 2",
    category: "chest",
    subCategory: "lower pec",
  },
  {
    title: "Paris Video 3",
    videoUrlID: "1CcZz9e4Q00K8D3HN8sB4vagCj5emXeuT",
    description: "Paris Video 3",
    category: "chest",
    subCategory: "upper pec",
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
