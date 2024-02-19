import { Router } from "express";
import { authMiddleware } from "../middlewares/userAuthMiddleware.js";
import { followOtherUser, getAllFollowers } from "../controllers/friendship.controller.js";




const friendshipRouter=Router()

friendshipRouter.post('/:following_id',authMiddleware,followOtherUser)
friendshipRouter.get('/',authMiddleware,getAllFollowers)




export default friendshipRouter