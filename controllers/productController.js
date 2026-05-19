import Product from "../models/productModel.js";

export const createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    if (!name || !price || !description) {
     return res.json({
        message: "All fields are required",
      });
    }

    const product = await Product.create({name, price, description});
    res.json({message:"Product created successfully",data:product})
  }
  
  catch (error) {
   res.json({message:error.message})
  }
};

export const getProduct = async (req,res) => {
  try {
   const product=await Product.find()
   res.json(product)
  } catch (error) {
   res.json({message:error.message})
  }
};

export const getProductById = async (req,res) => {
  try {
  const product=await Product.findById(req.params.id)
  if(!product){
  return res.json({message:"Product not found"})
  }
  res.json(product)

  } catch (error) {
   res.json({message:"Server error"})
  }
};

export const updateProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!product) {
      return res.json({ message: "Product not found" });
    }

    res.json(product);

  } catch (error) {
    res.json({ message: "Server error" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });

  } catch (error) {
    res.json({ message: "Server error" });
  }
};