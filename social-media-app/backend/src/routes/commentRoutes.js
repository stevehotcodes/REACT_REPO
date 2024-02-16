import { Router } from "express";
import { addComment, getCommentOfAPost } from "../controllers/comment.controller.js";



const commentRouter=Router()

commentRouter.post('/:post_id',addComment)
commentRouter.get('/:post_id',getCommentOfAPost)


export default commentRouter