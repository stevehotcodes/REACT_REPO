import { sendBadRequest, sendCreated, sendNotFound, sendServerError, sendSuccess } from "../helpers/helper.function.js";
import { createGroupService, getAllGroupsService, getOnegroupService, updateGroupDetailsService } from "../services/groupService.js";
import logger from "../utils/logger.js";
import { groupValidator } from "../validators/group.validators.js";





export const createGroup=async(req,res)=>{
    try 
    {
        const group={
            group_name:req.body.group_name,
            group_description:req.body.group_description

        }

        
           
                const{error}=groupValidator(group)
           if(error){
            return sendBadRequest(res,error.details[0].message)
           }
           const result=await createGroupService(group)
            sendSuccess(res,"group created successfully")
       

    } 
    catch (error) {
        sendServerError(res,error)
        
    }
}

export const getAllGroups=async(req,res)=>{
    try {
        
        const groups=await getAllGroupsService()
        // logger.info(groups)
        if(groups.length==0){
            sendNotFound(res,"no groups found")
        }
        else{
            return res.status(200).json(groups)
        }
        
    } catch (error) {
         sendServerError(res,error)
    }
}

export const getOneGroup =async(req,res)=>{
    try{
         let group_id=req.params.group_id;
         const group=await getOnegroupService(group_id);
         if(group){
            // console.log(group)
            return res.status(200).json(group)
         }
         else{
            // console.log("no found")
            sendNotFound(res,"group not found")
         }
    }
    catch(error){
            sendServerError(res,error)
    }
}

export const updateGroupDetails=async(res,req)=>{
    try {
          const group_id=req.body.group_id
          const group={
            group_name:req.body.group_name,
            group_description:req.body.group_description

        }

        if(req.body.group_name!=="" && req.body.group_description!==""){
            const result=await updateGroupDetailsService(group_id,group)
            console.log(result)
            if(result.rowsAffected[0]==1){
                  sendCreated(res,"group details updated successfully ")
            }
            
         }
         else{
             console.log("body cannot be empty")
         }

           
    } catch (error) {
        logger.info(error);
        sendServerError(res,error)
        
    }
}