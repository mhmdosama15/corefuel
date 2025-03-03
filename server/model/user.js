import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    foodCollection: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "food",
      required: false,
    },
    metrics: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "metrics",
      required: false,
    },
    exerciseCollection: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "exercise",
      required: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);
export default User;
