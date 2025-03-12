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
Arnold shoulder press (Front delt)
https://drive.google.com/file/d/1NyhOdaOCZT4GkXwJhG1JIJ-vjYxtbslZ/view?usp=sharing
desc:Setup: Sit on a bench with a dumbbell in each hand at chest height, palms facing you.
Starting Position: Rotate your palms outward as you press the dumbbells overhead.
Press: Fully extend your arms, turning your palms forward at the top.
Lower: Reverse the motion back to the starting position.
Repeat: Maintain steady breathing and repeat for desired reps.
Tip: Focus on controlled rotation for better shoulder engagement.


Barbell shoulder press (Front delt)
https://drive.google.com/file/d/17ACQVqg2g7v1F5V5VNkFj0MM8_iSE9MH/view?usp=sharing
desc:
Setup: Stand with a barbell held at shoulder height, palms facing forward.
Starting Position: Keep your elbows bent and core engaged.
Press: Push the barbell overhead until your arms are fully extended.
Lower: Slowly return the barbell to shoulder height with control.
Repeat: Maintain steady breathing and repeat for desired reps.
Tip: Avoid arching your lower back by tightening your core.


Leaning reverse press (Rear delt)
https://drive.google.com/file/d/11kehdf6mgByBxxowYIYyfX3om4WW28Rp/view?usp=sharing
desc:
Setup: Lie face down on a flat bench with a dumbbell in each hand.
Starting Position: Hold the dumbbells below your chest with your arms slightly bent.
Raise: Lift the dumbbells outward to shoulder height, squeezing your shoulder blades.
Lower: Slowly return the dumbbells to the starting position.
Repeat: Maintain steady breathing and repeat for desired reps.
Tip: Keep your head neutral and avoid jerking movements.


Leaning shoulder curl (middle delt)
https://drive.google.com/file/d/1kVc43O972mkD1B6atsCW2aTrm3pCEhpi/view?usp=sharing
desc:
Setup: Stand upright with a dumbbell in each hand, palms facing forward.
Starting Position: Hold the dumbbells at your sides with elbows slightly bent.
Curl: Raise the dumbbells outward to shoulder height.
Lower: Slowly return the dumbbells to the starting position.
Repeat: Maintain steady breathing and repeat for desired reps.
Tip: Keep your torso stable to prevent swinging.


Shoulder press (front delt)
https://drive.google.com/file/d/1w59HUW6MbpgM-ptgGbQe6xwRiYpzP2Gh/view?usp=sharing
desc:
Setup: Sit on a bench with a dumbbell in each hand, resting on your thighs.
Starting Position: Bring the dumbbells to shoulder height with palms facing forward.
Press: Push the dumbbells upward until your arms are fully extended but not locked.
Lower: Slowly return the dumbbells to shoulder height with control.
Repeat: Maintain steady breathing and repeat for desired reps.
Tip: Keep your core engaged to avoid arching your back.


Shrugs(traps)
https://drive.google.com/file/d/18sNFBWzPSeYTDAqMRKgRjFDiOOdtqF8y/view?usp=sharing
desc:
Setup: Sit on a bench with a dumbbell in each hand, palms facing forward.
Starting Position: Hold the dumbbells at your sides with elbows slightly bent.
Curl: Raise the dumbbells outward to shoulder height.
Lower: Slowly return the dumbbells to the starting position.
Repeat: Maintain steady breathing and repeat for desired reps.
Tip: Avoid using momentum; lift with control.

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
  {
    title: "Barbell Shoulder Press",
    videoUrlID: "17ACQVqg2g7v1F5V5VNkFj0MM8_iSE9MH",
    description:
      "Setup: Stand with a barbell held at shoulder height, palms facing forward. Starting Position: Keep your elbows bent and core engaged. Press: Push the barbell overhead until your arms are fully extended. Lower: Slowly return the barbell to shoulder height with control. Repeat: Maintain steady breathing and repeat for desired reps. Tip: Avoid arching your lower back by tightening your core.",
    category: "shoulders",
    subCategory: "front delt",
  },
  {
    title: "Leaning Reverse Press",
    videoUrlID: "11kehdf6mgByBxxowYIYyfX3om4WW28Rp",
    description:
      "Setup: Lie face down on a flat bench with a dumbbell in each hand. Starting Position: Hold the dumbbells below your chest with your arms slightly bent. Raise: Lift the dumbbells outward to shoulder height, squeezing your shoulder blades. Lower: Slowly return the dumbbells to the starting position. Repeat: Maintain steady breathing and repeat for desired reps. Tip: Keep your head neutral and avoid jerking movements.",
    category: "shoulders",
    subCategory: "rear delt",
  },
  {
    title: "Leaning Shoulder Curl",
    videoUrlID: "1kVc43O972mkD1B6atsCW2aTrm3pCEhpi",
    description:
      "Setup: Stand upright with a dumbbell in each hand, palms facing forward. Starting Position: Hold the dumbbells at your sides with elbows slightly bent. Curl: Raise the dumbbells outward to shoulder height. Lower: Slowly return the dumbbells to the starting position. Repeat: Maintain steady breathing and repeat for desired reps. Tip: Keep your torso stable to prevent swinging.",
    category: "shoulders",
    subCategory: "middle delt",
  },
  {
    title: "Shoulder Press",
    videoUrlID: "1w59HUW6MbpgM-ptgGbQe6xwRiYpzP2Gh",
    description:
      "Setup: Sit on a bench with a dumbbell in each hand, resting on your thighs. Starting Position: Bring the dumbbells to shoulder height with palms facing forward. Press: Push the dumbbells upward until your arms are fully extended but not locked. Lower: Slowly return the dumbbells to shoulder height with control. Repeat: Maintain steady breathing and repeat for desired reps. Tip: Keep your core engaged to avoid arching your back.",
    category: "shoulders",
    subCategory: "front delt",
  },
  {
    title: "Shrugs",
    videoUrlID: "18sNFBWzPSeYTDAqMRKgRjFDiOOdtqF8y",
    description:
      "Setup: Hold a dumbbell in each hand, palms facing forward. Starting Position: Stand upright with your arms relaxed at your sides. Lift: Shrug your shoulders upward as high as possible. Lower: Slowly return to the starting position. Repeat: Maintain steady breathing and repeat for desired reps. Tip: Avoid using momentum; lift with control.",
    category: "shoulders",
    subCategory: "traps",
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
