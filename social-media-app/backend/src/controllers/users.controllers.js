import { addUserService } from "../services/userService.js"
import * as uuid from 'uuid'
import logger from "../utils/logger.js"







export const registerUser=async (req,res)=>{
     console.log("hello")
     res.status(200).json({message:"ok"})

     try {
        const id =uuid.v4()
          const newUser={
              user_id:id,
              username:req.body.username,
              email:req.body.email,
              tagname:req.body.tagname,
              password:req.body.password
          }

          let response=await addUserService(newUser);
          logger.info(response)

     } catch (error) {
         console.log(error)
     }
}