import { Router } from "express";
import { verifyUserIdentity } from "../middlewares/userAuthMiddleware.js";
import { followOtherUser, getAllFollowers } from "../controllers/friendship.controller.js";




const friendshipRouter=Router()

friendshipRouter.post('/:following_id',verifyUserIdentity,followOtherUser)
friendshipRouter.get('/',verifyUserIdentity,getAllFollowers);





export default friendshipRouter