import mongoose from "mongoose";

const formcheckSchema = new mongoose.Schema(
  {
    formName: {
      type: String,
      required: true,
    },
    formVideo: {
      type: String,
      required: true,
    },
    formDescription: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const FormCheck = mongoose.model("formcheck", formcheckSchema);
export default FormCheck;
