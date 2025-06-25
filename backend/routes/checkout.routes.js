import express from "express"
import{ checkUserAuth }from "../middlewares/auth.middleware.js"
import { createCheckout, finalizeInOrderList, bankPay, cashOnDelivery } from "../controllers/checkout.controller.js"
const router = express.Router()
router.post("/create",checkUserAuth,createCheckout)
router.put("/pay/:id",checkUserAuth,bankPay)
router.put("/final/:id",checkUserAuth,finalizeInOrderList)
router.put("/cod/:id",checkUserAuth,cashOnDelivery)
export default router