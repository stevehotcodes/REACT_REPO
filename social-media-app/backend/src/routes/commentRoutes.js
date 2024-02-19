import { Router } from "express";
import { addComment, deleteCommentPost, getCommentOfAPost } from "../controllers/comment.controller.js";
import { verifyUserIdentity} from "../middlewares/userAuthMiddleware.js";



const commentRouter=Router()

commentRouter.post('/:post_id', verifyUserIdentity,addComment)
commentRouter.get('/:post_id',verifyUserIdentity,getCommentOfAPost)
commentRouter.delete('/:comment_id', verifyUserIdentity,deleteCommentPost);


export default commentRouter