import { forbidden, notAuthorized, sendCreated, sendDeleteSuccess, sendNotFound, sendServerError } from "../helpers/helper.function.js";
import { createPostService, deleteAPostService, getAllPostsService, getOnePostService, updateAPostService } from "../services/postService.js";




export const createPost=async (req,res)=>{
    try{
         
         const newPost={
              user_id:req.user.user_id,
              content:req.body.content,
              image:req.body.image
         }
         
         const response =await createPostService(newPost)
        //  console.log(response.result1.rowsAffected,response.result2.rowsAffected)

         if(response.result1.rowsAffected>0&&response.result2.rowsAffected>0){
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
        let user_id=req.user.user_id;
        let postDetails=await getOnePostService(post_id);

        if(postDetails.length==0){
            sendNotFound(res,"post does not exist")
        }
        else{
            if(postDetails[0].user_id==req.user.user_id){
                let {content}=req.body
            
                const response= await updateAPostService(post_id,content);
                console.log(response)

                if(response.rowsAffected[0]>0){    
                    sendSuccess(res,"updated successfully")
                 }
                 else{
                    sendNotFound(res,"post not found ")
                  
                }

            }else{
                forbidden(res,'forbidden')
            }

        }
               
    } catch (error) {
        sendServerError(res,error)
    }
}

export const deleteAPost=async(req,res)=>{
    try {
        let user_id=req.user.user_id
        console.log('user_id',user_id)

        let post_id=req.params.post_id;
        //check whether the user is the owner of the post

        let postDetails=await getOnePostService(post_id);

        console.log("This is a post details",postDetails)

        if(postDetails.length==0){
            sendNotFound(res,"post does not exist")
        }else{
            if(postDetails[0].user_id==req.user.user_id){
                let response =await deleteAPostService(post_id)

                // console.log(response);
                if(response.rowsAffected>0){    
                    sendDeleteSuccess(res,"deleted successfully")
                }
                else{
                    sendNotFound(res,"post not found or it has already been deleted")
                }

            }
            else{
                forbidden(res,'forbidden')
            }

        }
     
        
    } catch (error) {
        sendServerError(res, error.message)   
    }
}

