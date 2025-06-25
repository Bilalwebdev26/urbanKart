import express from "express"
import {checkUserAuth,checkAdmin} from "../../middlewares/auth.middleware.js"
import { getShippingPrice, setShippingPrice } from "../../controllers/admin/updateShipping.admin.controller.js"
const router = express.Router()
router.put("/update",checkUserAuth,checkAdmin,setShippingPrice)
router.get("/",checkUserAuth,checkAdmin,getShippingPrice)
export default router