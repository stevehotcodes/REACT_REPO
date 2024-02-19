import { sendBadRequest, sendCreated, sendDeleteSuccess, sendNotFound, sendServerError, sendSuccess } from "../helpers/helper.function.js";
import { addCommentService, deleteCommentPostService, getCommentOfAPostService } from "../services/commentService.js";
import { getOnePostService } from "../services/postService.js";
import logger from "../utils/logger.js";
;



export const addComment=async(req,res)=>{
    try {
          const post_id=req.params.post_id;

          const post=await getOnePostService(post_id);

          if(post.length==0){
            sendNotFound(res,"Post does not exist")
          }
          else{
            const comment={
                user_id:req.user.user_id ,
                content:req.body.content
                   
              }
    
            const result =await addCommentService(comment,post_id);
            //   console.log(result)
    
            if(result.rowsAffected>0){
                sendCreated(res,"comment added ")
            }
          }

       
       
        
    } catch (error) {
        console.log(error)
    }
}

export const getCommentOfAPost=async(req,res)=>{
    try {
        const post_id=req.params.post_id;
        console.log(post_id);
         const result =await getCommentOfAPostService(post_id);
         if (result){
            console.log(result)
            return res.status(200).json(result)
         }
         else{
            console.log("not found");
            sendNotFound(res,"not found")
         }

        
    } catch (error) {
        sendServerError(res,error)
    }
}
export const deleteCommentPost=async(req,res)=>{
    try {
         const comment_id=req.params.comment_id;
        logger.info(comment_id)
        //check if the comment exists 
        const comment=await getCommentOfAPostService(comment_id);
         
        if(comment.length==0){
            sendNotFound(res, "The comment does not exist")
        }
        else{
            const response=await deleteCommentPostService(comment_id);
            logger.info("response about the deletion",response)
            if(response){
                sendDeleteSuccess(res,"comment deleted successfully")
            }

        }

        
    } catch (error) {
        sendNotFound(res,error)
         
    }
}



