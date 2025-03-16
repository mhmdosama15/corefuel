import express from "express";
import {
  addUsername,
  createUser,
  loginUser,
  verifyUser,
} from "../controller/authController.js";
import { getUserData, updateUserData } from "../controller/userController.js";

const router = express.Router();

router.post("/register", createUser);
router.patch("/add-username", verifyUser, addUsername);
router.post("/login", loginUser);
router.patch("/update", verifyUser, updateUserData);

// user
router.get("/", verifyUser, getUserData);
export default router;
