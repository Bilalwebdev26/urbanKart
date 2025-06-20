import express from "express"
import { checkAdmin, checkUserAuth } from "../../middlewares/auth.middleware.js"
import { createProduct, deleteProduct, showAllProducts, updateProduct,setFeaturedproduct, setInSaleListing, setDateforSale } from "../../controllers/admin/adminProd.controller.js"
const router = express.Router()
router.post("/createProduct",checkUserAuth,checkAdmin,createProduct)//create new product
router.get("/showallproducts",checkUserAuth,checkAdmin,showAllProducts)//show all products
router.delete("/delete/:id",checkUserAuth,checkAdmin,deleteProduct)//Delete product
router.put("/updateProduct/:id",checkUserAuth,checkAdmin,updateProduct)//update product
router.put("/setfeature/:id",checkUserAuth,checkAdmin,setFeaturedproduct)//set featured
router.put("/setSaleProduct/:id",checkUserAuth,checkAdmin,setInSaleListing)//set sale product
router.get("/livetrue",checkUserAuth,checkAdmin,setDateforSale)
export default router