import { sendNotFound, sendServerError, sendSuccess } from "../helpers/helper.function.js";
import { createMessageService,  deleteOneMessageServiceByReceiver, readAllMessageServiceBySender } from "../services/messagesService.js";



export const createMessage=async(req,res)=>{
    try {
        
        const message={
            content:req.body.content,
            sender_id:req.user.user_id,
            receiver_id:req.body.receiver_id

        }
        const response= await createMessageService(message);
        console.log(response)
        return sendSuccess(res,"message sent")
        
    } catch (error) {
        return sendServerError(res, error)
    }
}

export const readAllMessageBySender=async(req,res)=>{
    try {
         
        const sender_id=req.user.sender_id
       
        const response= await readAllMessageServiceBySender(sender_id);
        console.log(response)
        if(response.length==0){
            return sendNotFound(res,"no messages")
        }
        return res.status(200).json(response)
        
    } catch (error) {
        return sendServerError(res, error)
    }
}

export const deleteOneMessageByReceiver=async(req,res)=>{
    try {
         const receiver_id=req.params.receiver_id
       
        const response= await deleteOneMessageServiceByReceiver(receiver_id);
        console.log(response)
   
        return res.status(200).json(response)
        
    } catch (error) {
        return sendServerError(res, error)
    }
}

//delete all messages from a receiver

