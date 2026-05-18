import Product from "../models/productModel.js";

export const createProduct=async(req,res)=>{
   try {
    const {name,price,description}=req.body
    if(!name||!price||!description){
        res.json({
            message:"All fields are required"
        })
    }
    

    const user=await user{
        name:
    }
   } catch (error) {
    
   }
}


export const getProduct=async()=>{
   try {
    
   } catch (error) {
    
   }
}




export const getProductById=async()=>{
   try {
    
   } catch (error) {
    
   }
}


export const updateProductById=async()=>{
   try {
    
   } catch (error) {
    
   }
}


export const deleteProductById=async()=>{
   try {
    
   } catch (error) {
    
   }
}