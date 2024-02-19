import { Router } from "express";
import { createMessage, deleteOneMessageByReceiver, readAllMessageBySender } from "../controllers/messages.controllers.js";
import { verifyUserIdentity } from "../middlewares/userAuthMiddleware.js";





const messageRouter =Router();

messageRouter.post('/new',verifyUserIdentity,createMessage);
messageRouter.get('/:sender_id',verifyUserIdentity,readAllMessageBySender)
messageRouter.delete('/:receiver_id',verifyUserIdentity,deleteOneMessageByReceiver)
export default messageRouter