import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express();

import userRoutes from "./routes/user.routes.js"
import prodRoutes from "./routes/product.routes.js"
import wishlistRoutes from "./routes/wishlist.routes.js"
import reviewRoutes from "./routes/review.routes.js"
import cartRoutes from "./routes/cart.routes.js"
import checkoutRoutes from "./routes/checkout.routes.js"
import orderRoutes from "./routes/order.routes.js"
import adminUserRoutes from "./routes/admin/adminUser.routes.js"
import adminProductRoutes from "./routes/admin/adminProd.routes.js"
import adminShippingRoutes from "./routes/admin/shipping.routes.js"

dotenv.config();
app.use(cookieParser())
app.use(cors())
app.use(express.json())
//setRoutes
app.use("/api/v1/auth",userRoutes)
app.use("/api/v1/product",prodRoutes)
app.use("/api/v1/wishlist",wishlistRoutes)
app.use("/api/v1/review",reviewRoutes)
app.use("/api/v1/cart",cartRoutes)
app.use("/api/v1/checkout",checkoutRoutes)
app.use("/api/v1/order",orderRoutes)
//Admin Routes
app.use("/admin/user",adminUserRoutes)//Admin user
app.use("/admin/product",adminProductRoutes)//Admin Products
app.use("/admin/shipping",adminShippingRoutes)//Admin Shipping Charges
app.get("/",(req,res)=>{
    res.send("urbanKart")
})
export default app;
