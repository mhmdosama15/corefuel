import express from "express";
import {
  addUsername,
  createUser,
  loginUser,
  verifyUser,
} from "../controller/authController.js";
import { getUserData } from "../controller/userController.js";

const router = express.Router();

router.post("/register", createUser);
router.patch("/update-username", verifyUser, addUsername);
router.post("/login", loginUser);

// user
router.get("/user-data", getUserData);
export default router;
