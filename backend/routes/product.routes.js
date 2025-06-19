import express from "express"
import { checkUserAuth } from "../middlewares/auth.middleware.js"
import { bestProductofEachCategory, bestSellingProducts, createProduct, showProductId, showProductsbyCategory, showSimillarProduct } from "../controllers/product.controller.js"
const router = express.Router()
router.post("/create-product",checkUserAuth,createProduct)
router.get("/all",showProductsbyCategory)
router.get("/similarproducts/:id",showSimillarProduct)
router.get("/bestsellingproducts",bestSellingProducts)
router.get("/bestproductforeachcatgeory",bestProductofEachCategory)
router.get("/:id",showProductId)
export default router