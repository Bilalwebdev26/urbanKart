import mongoose from "mongoose";
import { DB_NAME } from "./db.name.js";

export const mongoDB = async()=>{
    try {
        const dbconnect = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("MongoDb connect : ",dbconnect.connection.host)
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}