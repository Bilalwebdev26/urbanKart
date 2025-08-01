import express from "express"
import {checkUserAuth} from "../middlewares/auth.middleware.js"
import { addReview, removeReview, updateReview } from "../controllers/review.controller.js"
const router = express.Router()
router.post("/addreview/:id",checkUserAuth,addReview)
router.delete("/deleteReview/:id",checkUserAuth,removeReview)
router.put("/updateReview/:id",checkUserAuth,updateReview)
export default router