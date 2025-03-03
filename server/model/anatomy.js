import mongoose from "mongoose";

const anatomySchema = new mongoose.Schema(
  {
    anatomyName: {
      type: String,
      required: true,
    },
    anatomyType: {
      type: String,
      required: true,
    },
    anatomyGroups: [
      {
        groupName: { type: String, required: true },
        exercises: [{ exerciseName: { type: String, required: true } }],
      },
    ],
  },
  { timestamps: true }
);

const Anatomy = mongoose.model("anatomy", anatomySchema);
export default Anatomy;
