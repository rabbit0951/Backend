// first approach to Conncet Database;

// import mongoose from "mongoose";
// import { DB_NAME } from "./src/constants.js";
// import dotenv from 'dotenv';
// dotenv.config();


// import express from "express"
// const app = express();
// ;(async ()=>{
//     try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     app.on("error",(error)=>{
//         console.log("ERROR",error)
//         throw error 
//     })    
  
//     app.listen(process.env.PORT,()=>{console.log(`server started at ${process.env.PORT} `)})

// } 
//     catch (error) {
//         console.error("ERROR",error)
//         throw error
//     }
// })()

//////////////////////////////////////////Second Approach///////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import {connectDB} from "./src/db/index.js"
import 'dotenv/config'

// conn
connectDB()