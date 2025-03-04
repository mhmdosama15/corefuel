import express from "express";
import {
  addUsername,
  authenticateUser,
  createUser,
} from "../controller/authController.js";

const router = express.Router();

router.post("/register", createUser);
router.patch("/update-username", authenticateUser, addUsername);
export default router;
