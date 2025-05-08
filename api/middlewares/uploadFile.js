import multer from "multer";
import { v4 as uuid } from "uuid";
import { v2 as cloudinary } from "cloudinary";

import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "productosImgs",
    formate: (req, file) => "jpeg",
    public_id: (req, file) => uuid(),
  },
});

const upload = multer({
  storage,
});

export default upload;
