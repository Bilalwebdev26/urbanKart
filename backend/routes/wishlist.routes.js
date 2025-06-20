import express from "express"
const router = express.Router()
import { checkUserAuth } from "../middlewares/auth.middleware.js";
import { addInWishList, removeAll, removeFromWishlist, showAllWishlistProducts } from "../controllers/wishlist.controller.js";
router.get("/addinwishlist/:id",checkUserAuth,addInWishList)
router.delete("/deleteproduct/:id",checkUserAuth,removeFromWishlist)
router.get("/showall",checkUserAuth,showAllWishlistProducts)
router.delete("/deleteAll",checkUserAuth,removeAll)
export default router