import { sendCreated, sendDeleteSuccess, sendNotFound, sendServerError } from "../helpers/helper.function.js";
import { createPostService, deleteAPostService, getAllPostsService, getOnePostService, updateAPostService } from "../services/postService.js";




export const createPost=async (req,res)=>{
    try{
         const newPost={
              user_id:req.user.user_id,
              content:req.body.content
         }
         
         const response =await createPostService(newPost)
         if(response.rowsAffected==1){
            sendCreated(res,'post created successfully')
         }

    }
    catch(error){
       logger.error(error);
       sendServerError(res,error.message) 

    }
}

export const getAllPosts=async(req,res)=>{
    try {
            const postData=await getAllPostsService()
    
            if (postData.length==0){
                sendNotFound(res,'no post found')
            }
            return res.status(200).json(postData)
    } catch (error) {
        logger.info(error);
        sendServerError(res,error)
    }
}

export const getOnePost =async (req,res)=>{
    try {
          let post_id=req.params.post_id;
           const post =await getOnePostService(post_id);
           if(post.length==0){return sendNotFound(res,"post not found")}
        return res.status(200).json(post)
    } catch (error) {
        sendServerError(res, {error})
        
    }
}

export const updateAPost=async(req, res)=>{
    try {
        let post_id=req.params.post_id;
        let {content}=req.body
        const response= await updateAPostService(post_id,content);
        console.log(response)
        if(response.rowsAffected[0]==1){    
             sendDeleteSuccess(res,"updated successfully")
        }


        
    } catch (error) {
        sendServerError(res,error)
    }
}

export const deleteAPost=async(req,res)=>{
    try {
        let post_id=req.params.post_id;

        let response =await deleteAPostService(post_id)

        // console.log(response);
        if(response.rowsAffected[0]==1){    
            sendDeleteSuccess(res,"deleted successfully")
        }
        else{
            sendNotFound(res,"post not found or it has already been deleted")
        }
        
        
    } catch (error) {
        sendServerError(res, error)   
    }
}