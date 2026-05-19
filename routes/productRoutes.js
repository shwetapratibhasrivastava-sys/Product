import { createProduct,getProduct,getProductById,updateProductById,deleteProduct } from "../controllers/productController.js";
import express from "express"

const productRoutes=express.Router()
productRoutes.post("/",createProduct);
productRoutes.get("/",getProduct);
productRoutes.get("/:id",getProductById);
productRoutes.put("/:id",updateProductById);
productRoutes.delete("/:id",deleteProduct);

export default productRoutes;