import { Router } from "express";
import { createMessage, deleteOneMessageByReceiver, readAllMessageBySender } from "../controllers/messages.controllers.js";
import { authMiddleware } from "../middlewares/userAuthMiddleware.js";





const messageRouter =Router();

messageRouter.post('/new',authMiddleware,createMessage);
messageRouter.get('/:sender_id',readAllMessageBySender)
messageRouter.delete('/:receiver_id',deleteOneMessageByReceiver)
export default messageRouter