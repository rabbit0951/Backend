// Second approach to connect database

import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("connection Instance",connectionInstance.connection)
        console.log(`\nMongoDBconnected!! DB Host ${connectionInstance.connection.host}`)
    //READ "console.log connectionInstance"
    } catch (error) {
        console.log("MONGO_db ERROR",error)
        process.exit(1) // READ
    }
}

