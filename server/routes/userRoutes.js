import express from "express";
import { verifyUser } from "../controller/authController.js";
import {
  createExercise,
  deleteExercise,
  deleteFood,
  generateUserCalories,
  getExerciseVideos,
  getMotivationalQuote,
  getUserExercises,
  getUserFood,
  saveFood,
  searchExercise,
  searchFood,
} from "../controller/userController.js";

const router = express.Router();

router.post("/motivational-quote", verifyUser, getMotivationalQuote);
router.post("/add-exercise", verifyUser, createExercise);
router.post("/delete-exercise", verifyUser, deleteExercise);
router.get("/get-exercises", verifyUser, getUserExercises);
router.post("/search-food", verifyUser, searchFood);
router.post("/save-food", verifyUser, saveFood);
router.get("/get-user-food", verifyUser, getUserFood);
router.get("/get-exercises/:category", verifyUser, getExerciseVideos);
router.post("/search-exercise", verifyUser, searchExercise);
router.get("/get-calories", verifyUser, generateUserCalories);
router.post("/delete-food", verifyUser, deleteFood);

export default router;
