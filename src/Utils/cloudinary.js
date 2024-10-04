import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

 // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    })

    cloudinary.v2.uploader.upload("02_Setup_backend_project\public\images\Screenshot 2024-09-12 201609.png",{public_id:"npn&pnp",resource_type:"auto"},(err,result)=>{
        console.log(result)
    })