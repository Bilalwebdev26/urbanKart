import express from "express"
import { checkUserAuth } from "../middlewares/auth.middleware.js"
import { bestProductofEachCategory, bestSellingProducts, newArrivalProducts, showFlashSalesProducts, showProductId, showProductsbyCategory, showSimillarProduct } from "../controllers/product.controller.js"
const router = express.Router()
router.get("/all",showProductsbyCategory)//show products by query /all?name=jacket
router.get("/similarproducts/:id",showSimillarProduct)//show related products
router.get("/bestsellingproducts",bestSellingProducts)//show best selling products
router.get("/bestproductforeachcatgeory",bestProductofEachCategory)//show best product for each category
router.get("/showsalesproducts",showFlashSalesProducts)//show Flash sale products
router.get("/newproducts",newArrivalProducts)//show newly arrived products
router.get("/:id",showProductId)//show single product
export default router