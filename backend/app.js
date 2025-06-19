import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express();

import userRoutes from "./routes/user.routes.js"
import prodRoutes from "./routes/product.routes.js"
import adminUserRoutes from "./routes/admin/adminUser.routes.js"

dotenv.config();
app.use(cookieParser())
app.use(cors())
app.use(express.json())
//setRoutes
app.use("/api/v1/auth",userRoutes)
app.use("/api/v1/product",prodRoutes)
//Admin Routes
app.use("/admin/user",adminUserRoutes)
app.get("/",(req,res)=>{
    res.send("urbanKart")
})
export default app;
