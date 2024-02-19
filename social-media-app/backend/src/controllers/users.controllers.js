import { addUserService, deleteUserService, findByCredentialsService, getAllUserService, getOneUserService, getUserByEmailService, updateUserDetailsService } from "../services/userService.js"
import * as uuid from 'uuid'
import logger from "../utils/logger.js"
import { userLoginValidator, userUpdateValidator, userValidator } from "../validators/user.validators.js"
import { sendBadRequest, sendDeleteSuccess, sendNotFound, sendServerError } from "../helpers/helper.function.js"



export const registerUser=async (req,res)=>{
    //  console.log("hello")
      try {
        // const id =uuid.v4()
      const userExists=await getUserByEmailService(req.body.email)
        if(userExists.length>0){
             sendBadRequest(res,"an account associated with that email already exists")
        }
        else{
          const newUser={
            
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

export const getOneUser=async(req, res)=>{
  try { 
      let user_id=req.params.user_id
      let data=await getOneUserService(user_id)
        if(data.length!==0){
           return res.status(200).json(data[0]);
         }
         else{
           sendNotFound(res,"user not found")
         
         }
      
    
  } catch (error) {
        logger.info(error);
        sendServerError(res,error)
  }
}

export const updateUserDetails=async(req,res)=>{
   try {
         let user_id=req.params.user_id;
        
         const user={
            
          username:req.body.username,
          email:req.body.email,
          tagname:req.body.tagname,
          
         }
         const {error}=userUpdateValidator(user)

         if(error){ return res.status(400).send(error.details[0].message);}
         
         let response=await updateUserDetailsService(user_id,user);
         console.log(response)

    
   } catch (error) {
    console.log(error)
   }
}

export const deleteUser=async(req,res)=>{
   try {
    let user_id=req.params.user_id;
    let response=await deleteUserService(user_id)
    console.log(response)

    if(response.rowsAffected==1){
       sendDeleteSuccess(res,'user deleted successfully')
    }
    
   } catch (error) {
    console.log(error)
   }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const { error } = userLoginValidator({ email, password });
    if (error) {
        return res.status(400).send(error.details[0].message);
    } else {
        try {
            const userResponse = await findByCredentialsService({ email, password });
            if (userResponse.error) {
                // notAuthorized(res, userResponse.error);
                return res.status(400).json(userResponse.error)
            } else {
                res.status(200).send(userResponse);
            }
        } catch (error) {
            sendServerError(res, error.message)
        }
    }
};
