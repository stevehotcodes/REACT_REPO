import { poolRequest,sql } from "../utils/dbConnect.js";

import * as uuid from 'uuid'



export const createMessageService=async(message)=>{
    try {
        const  message_id=uuid.v4()
        const result=await poolRequest()
        .input("message_id",sql.VarChar,message_id)
        .input("sender_id",sql.VarChar ,message.sender_id)
        .input("receiver_id",sql.VarChar,message.receiver_id)
        .input("content", sql.VarChar,message.content)
        .query(`
               INSERT INTO tbl_message(message_id,sender_id,receiver_id,content)
               VALUES(@message_id,@sender_id,@receiver_id,@content);           
        
        `)
        return result                
      
  } catch (error) {
      return error
      
  }
}

export const readAllMessageServiceBySender=async(sender_id)=>{
    try{
        const result=await poolRequest()
        .input("sender_id",sql.VarChar ,sender_id)
        .query("SELECT * FROM tbl_message WHERE sender_id=@sender_id");

        return result.recordset
    }
    catch(error){
            return error
    }
}

export const deleteOneMessageServiceByReceiver=async(receiver_id)=>{
    try {
            const result =await poolRequest()
            .input('receiver_id',sql.VarChar,receiver_id)
            .query('DELETE FROM tbl_message WHERE receiver_id=@receiver_id');
            
            return result 
        
    } catch (error) {
         return error 
    }
}

