import mongoose from "mongoose";

const connectDb=async()=>{
  if(!process.env.MONGO_URI){
    console.log("MONGO_URI is not accessible")
    process.exit(1);
  }
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDb connection successful")
  }
   catch (error) {
    console.log("MongoDb connection error:",error)
    process.exit(1);
  }
  
}


export default connectDb;