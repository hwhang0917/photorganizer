import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required",
  },
  location: {
    type: String,
    required: "Location is required",
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const model = mongoose.model("Image", ImageSchema);
export default model;
