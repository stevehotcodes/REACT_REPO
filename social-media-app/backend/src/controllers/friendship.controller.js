import { sendBadRequest, sendNotFound, sendServerError } from "../helpers/helper.function.js";
import { followOtherUserService, getAllFollowersService } from "../services/friendshipService.js";
import logger from "../utils/logger.js";






export const followOtherUser=async(req,res)=>{
    try {

        let follower_id=req.user.user_id 
        let {following_id}=req.params
        console.log("following id ", follower_id)

        let result=await followOtherUserService(follower_id,following_id)
        console.log(result)

        if(result.rowsAffected>0){
             return res.status(201).json({message:"you are folllowing that user"})   
        }
        else{
            sendBadRequest(res,' creation of friendship connection please try again')
        }
      
    } catch (error) {
        return res.status(500).json({error:error.message})
        
    }
}

export const getAllFollowers=async(req,res)=>{
    try {

        let follower_id=req.user.user_id 
        // let {following_id}=req.params
        console.log("following id ", follower_id)

        let result=await getAllFollowersService(follower_id);
        console.log(result)

        if(result.length==0){
      
            sendNotFound(res,"No friends found")   
        }
        else{
            return res.status(200).json(result)
        }
      
    } catch (error) {
        // return res.status(500).json({error:error.message})
        sendServerError(res,error.message)
        
    }
}