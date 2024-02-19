import {Router }from 'express'
import { createPost, deleteAPost, getAllPosts, getOnePost, updateAPost } from '../controllers/posts.controllers.js'
import { authMiddleware } from '../middlewares/userAuthMiddleware.js'




const postRouter=Router()

postRouter.post('/post',authMiddleware,createPost)
postRouter.get('/post',getAllPosts)
postRouter.get('/post/:post_id',getOnePost)
postRouter.patch('/post/:post_id',updateAPost)
postRouter.delete('/post/:post_id',deleteAPost)




export default postRouter