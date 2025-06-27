import express from "express"
import { checkAdmin, checkUserAuth } from "../../middlewares/auth.middleware.js"
import { markDelivered, showAllOrders, showOrdersByStatus, updateOrderStatus } from "../../controllers/admin/adminOrder.controller.js"
const router = express.Router()
router.get("/",checkUserAuth,checkAdmin,showAllOrders)
router.put("/deliver/:orderId",checkUserAuth,checkAdmin,markDelivered)
router.get("/showStatusOrders",checkUserAuth,checkAdmin,showOrdersByStatus)
router.put("/update/:orderId",checkUserAuth,checkAdmin,updateOrderStatus)
export default router