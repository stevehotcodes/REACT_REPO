import { Router } from "express";
import  {registerUser}  from "../controllers/users.controllers.js";



const userRouter=Router();

userRouter.post('/user',registerUser);








export default userRouter