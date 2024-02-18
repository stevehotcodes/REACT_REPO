import { Router } from "express";
import { addComment, deleteCommentPost, getCommentOfAPost } from "../controllers/comment.controller.js";



const commentRouter=Router()

commentRouter.post('/:post_id',addComment)
commentRouter.get('/:post_id',getCommentOfAPost)
commentRouter.delete('/:comment_id',deleteCommentPost);


export default commentRouter