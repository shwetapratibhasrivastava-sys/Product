import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDb from "./config/db.js";

dotenv.config();

const app = express();


connectDb();

const PORT=process.env.PORT||3000
app.use(cors())
app.use(express.json())

app.use("/",(req,res)=>{
    res.send("API is running")
})

app.listen(PORT, () => {
  `Server is listening on port${PORT}`});
