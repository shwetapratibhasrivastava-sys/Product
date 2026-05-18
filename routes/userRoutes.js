import { createUser,getUser,getUserById,updateUserById,deleteUserById } from "../controllers/userController.js";
import express from "express"

const userRoutes=express.Router(
userRoutes.post("/",createUser),
userRoutes.get("/",getUser),
userRoutes.get("/:id",getUserById),
userRoutes.put("/:id",updateUserById),
userRoutes.delete("/:id",deleteUserById),
)


export default userRoutes;