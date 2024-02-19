import { Router } from "express";
import  {deleteUser, getAllUsers, getOneUser, loginUser, registerUser,updateUserDetails}  from "../controllers/users.controllers.js";
import {verifyUserIdentity } from "../middlewares/userAuthMiddleware.js";



const userRouter=Router();

userRouter.post('/user',registerUser);
userRouter.get('/user',verifyUserIdentity,getAllUsers)
userRouter.post('/login',loginUser)
userRouter.get('/user/:user_id', verifyUserIdentity,getOneUser)
userRouter.patch('/user/:user_id',verifyUserIdentity,updateUserDetails);
userRouter.delete('/user/:user_id',verifyUserIdentity,deleteUser)







export default userRouter