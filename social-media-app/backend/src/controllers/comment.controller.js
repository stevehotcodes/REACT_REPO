import { sendCreated, sendNotFound, sendServerError, sendSuccess } from "../helpers/helper.function.js";
import { addCommentService, getCommentOfAPostService } from "../services/commentService.js";




export const addComment=async(req,res)=>{
    try {
          const post_id=req.params.post_id;

          const comment={
             user_id:req.body.user_id,
             content:req.body.content

          }

          const result =await addCommentService(comment,post_id);
        //   console.log(result)
        if(result.rowsAffected>0){
            sendCreated(res,"comment added ")
        }
       
        
    } catch (error) {
        console.log(error)
    }
}

export const getCommentOfAPost=async(req,res)=>{
    try {
        const post_id=req.params.post_id;
        console.log(post_id);;
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

