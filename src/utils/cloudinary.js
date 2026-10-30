import { v2 as cloudinary } from "cloudinary";
import ApiError from "./ApiError.js";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImageOnClaudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const resultUpload = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    return resultUpload;
  } catch (error) {
    throw new ApiError(400, "Failed to Upload image");
  } finally {
    fs.unlinkSync(localFilePath);
  }
};

//use try catch as async handler is made to be used for writting router and controller
export default uploadImageOnClaudinary;
