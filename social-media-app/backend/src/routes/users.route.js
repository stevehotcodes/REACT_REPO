import { Router } from "express";
import  {deleteUser, getAllUsers, getOneUser, registerUser,updateUserDetails}  from "../controllers/users.controllers.js";



const userRouter=Router();

userRouter.post('/user',registerUser);
userRouter.get('/user',getAllUsers)
userRouter.get('/user/:user_id',getOneUser)
userRouter.patch('/user/:user_id',updateUserDetails);
userRouter.delete('/user/:user_id',deleteUser)







export default userRouter