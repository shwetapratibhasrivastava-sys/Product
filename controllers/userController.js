import User from "../models/userModel.js";



export const createUser=async(req,res)=>{
     try {
      const {name,email,password}=req.body;
      if(!name||!email||!password)
      {
       return res.json({message:"All fields are required"})
      }
        const user=await User.create({
           name,
          email,
          password
     } ) 
       res.json({message:"User created suucessfully", data:user})
   
     } catch (error) {
        res.json({message:error.message})
     }
}


export const getUser=async(req,res)=>{
     try {
          const user=await User.find()
           res.json(user)
     } catch (error) {
         res.json({message:error.message}) 
     }
}




export const getUserById=async(req,res)=>{
     try {
          const user=await User.findById(req.params.id)
          if(!user){
              return req.json({message:"Usernot found"})
          }
          res.json(user)
     } catch (error) {
          res.json({message:error.message })
     }
  
}


export const updateUserById=async(req,res)=>{
        try {
          const user=await User.findByIdAndUpdate(
            req.parama.id,
            req.body,
            {
               new:true
            }
          )
          if(!user){
             return res.json({message:"User not found"})
          }
        res.json({message:"User Updated successfully", data:user})
     } catch (error) {
        res.json({message:error.message})
     }
}


export const deleteUser=async(req,res)=>{
     try {
          const user=await User.findByIdAndDelete(req.params.id)
          if(!user){
              return res.json({message:"User not found"})
          }
          res.json("User deleted successfully")
        
     } catch (error) {
          res.json({message:error.message})
        
     }
}








