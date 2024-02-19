import { sendBadRequest, sendCreated, sendDeleteSuccess, sendNotFound, sendServerError, sendSuccess } from "../helpers/helper.function.js";
import { createGroupService, deleteGroupService, getAllGroupsService, getGroupByNameService, getOnegroupService, updateGroupDetailsService } from "../services/groupService.js";
import logger from "../utils/logger.js";
import { groupValidator } from "../validators/group.validators.js";





export const createGroup=async(req,res)=>{
    try 
    {    
        //check if a group exists with that name
        const groupFromDB=await getGroupByNameService(req.body.group_name)
        console.log("group from the db",groupFromDB)
        if(groupFromDB.length>0){
            sendBadRequest(res,"The group already exists")
        }
        else {
            const group={
                group_name:req.body.group_name,
                group_description:req.body.group_description
    
            }      
               
             const{err}=groupValidator(group)
               if(err){
                return sendBadRequest(res,err.details[0].message)
               }
               else{
                const result=await createGroupService(group)
                sendSuccess(res,"group created successfully")

               }
              
        }
              

    } 
    catch (error) {
        sendServerError(res,"error in creating group")
        
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

export const updateGroupDetails=async(req,res)=>{
    try {
          const group_id=req.params.group_id
          const group=await getOnegroupService(group_id);
          if(group.length==0){
            sendNotFound(res,"group does not exist")
          }
          else{
            
          const groupDetails={
            group_name:req.body.group_name,
            group_description:req.body.group_description

         }

        // console.log("check req body value",(req.body.group_name!==null && req.body.group_description!==null))

        if(req.body.group_name!==null && req.body.group_description!==null){
            const result=await updateGroupDetailsService(group_id,groupDetails)
            console.log(result)
            if(result.rowsAffected>0){
                  sendCreated(res,"group details updated successfully ")
            }
            
         }
         else{
             console.log("body cannot be empty")
         }
          }


           
    } catch (error) {
        logger.info(error);
        sendServerError(res,error)
        
    }
}

export const deleteGroup=async(req,res)=>{
    try {
        const group_id=req.params.group_id
        const group=await getOnegroupService(group_id);
        if(group.length==0){
            sendNotFound(res,"group does not exist")
          }
          else{
             const response=await deleteGroupService(group_id);
             logger.info(response);
             sendDeleteSuccess(res,'group delete succesfully')
             
          }
        
    } catch (error) {
       sendServerError(res,error)  
    }
}

