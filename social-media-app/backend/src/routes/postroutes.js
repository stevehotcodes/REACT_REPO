import {Router }from 'express'
import { createPost, deleteAPost, getAllPosts, getOnePost, updateAPost } from '../controllers/posts.controllers.js'
import { verifyUserIdentity } from '../middlewares/userAuthMiddleware.js'




const postRouter=Router()

postRouter.post('/post',verifyUserIdentity,createPost)
postRouter.get('/post',verifyUserIdentity,getAllPosts)
postRouter.get('/post/:post_id',verifyUserIdentity,getOnePost)
postRouter.patch('/post/:post_id',verifyUserIdentity,updateAPost)
postRouter.delete('/post/:post_id',verifyUserIdentity,deleteAPost)




export default postRouter