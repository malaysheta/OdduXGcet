import {v2 as cloudinary} from "cloudinary"
import fs from "fs"



const uploadOnCloudinary = async (localpath) => {
  try {
    cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});
    if (!localpath) return null
    const response = await cloudinary.uploader.upload(localpath, {
      resource_type: "auto"
    })
    console.log("file uploaded to cloudinary", response.url)
    fs.unlinkSync(localpath)
    return response;
  }
  catch (error) {
    if (fs.existsSync(localpath)) {
      fs.unlinkSync(localpath)
    }
    return null
  }
}

export { uploadOnCloudinary }