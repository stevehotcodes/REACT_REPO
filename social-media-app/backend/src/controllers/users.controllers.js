import { addUserService, getAllUserService } from "../services/userService.js"
import * as uuid from 'uuid'
import logger from "../utils/logger.js"
import { userValidator } from "../validators/user.validators.js"
import { sendServerError } from "../helpers/helper.function.js"







export const registerUser=async (req,res)=>{
     console.log("hello")
    

     try {
        const id =uuid.v4()
          const newUser={
              user_id:id,
              username:req.body.username,
              email:req.body.email,
              tagname:req.body.tagname,
              password:req.body.password
          }

          const{error}=userValidator(newUser)
          if (error) {
            return res.status(400).send(error.details[0].message);
           } 

          let response=await addUserService(newUser);
        //   logger.info(response)

          if (response.rowsAffected){
            return res.status(201).send({message:"User created successfully"})
          }

     } catch (error) {
        //  console.log(error)
        sendServerError(res,error)
     }
}

export const getAllUsers=async(req,res)=>{
    try {

        let data =await getAllUserService();
        if(!data.recordset){
            return res.status(404).json({message:"Not found"})
        }
        return res.status(200).json(data.recordset)

        
    } catch (error) {
        console.log(error)
        sendServerError(res,error)
    }
}


