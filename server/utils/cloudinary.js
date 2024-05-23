const v2 = require('cloudinary');
const fs= require("fs");

          
v2.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret:  process.env.CLOUDINARY_SECRET_KEY
});

const uploadOnCloudinary=async(filePath)=>{
    try {
        if(!filePath) return null;
        const response=await v2.uploader.upload(filePath,{
            resource_type:"auto"
        })
        console.log("file updated successfully",response.url);
        fs.unlinkSync(filePath);
        return response;
    } catch (error) {
        fs.unlinkSync(filePath);
        return null;
    }
}

module.exports=uploadOnCloudinary;
