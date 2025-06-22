import express from "express"
import {checkUserAuth} from "../middlewares/auth.middleware.js"
import { addProductInCart, deleteAllCart, removeProductFromCart, showAll, updateQunatity } from "../controllers/cart.controller.js"
const router = express.Router()
router.post("/addproduct/:id",checkUserAuth,addProductInCart)
router.put("/updatequantity/:id",checkUserAuth,updateQunatity)
router.delete("/deleteproduct/:id",checkUserAuth,removeProductFromCart)
router.get("/showall",checkUserAuth,showAll)
router.delete("/deleteAll",checkUserAuth,deleteAllCart)
export default router