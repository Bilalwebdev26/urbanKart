import express from "express"
import{ checkUserAuth }from "../middlewares/auth.middleware.js"
import { getAllOrder, showOrderById } from "../controllers/order.controller.js"
const router = express.Router()
router.get("/showOrders",checkUserAuth,getAllOrder)
router.get("/myorder/:id",checkUserAuth,showOrderById)
export default router