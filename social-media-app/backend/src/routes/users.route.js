import { Router } from "express";
import  {getAllUsers, registerUser}  from "../controllers/users.controllers.js";



const userRouter=Router();

userRouter.post('/user',registerUser);
userRouter.get('/user',getAllUsers)







export default userRouter