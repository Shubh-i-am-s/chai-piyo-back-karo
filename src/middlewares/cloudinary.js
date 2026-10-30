import { v2 as cloudinary } from "cloudinary";
import asyncHandler from "../utils/asyncHandler.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImageOnClaudinary = asyncHandler(async (req, res) => {
  const resultUpload = await cloudinary.uploader.upload(localFilePath);
  //location file path ? and below logic
  if (!resultUpload) {
    res.status(400).json({ message: "Failed to upload image" });
  }
});

//pending logic
