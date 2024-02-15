import { sendCreated, sendNotFound, sendServerError, sendSuccess } from "../helpers/helper.function.js";
import { createGroupService, getAllGroupsService } from "../services/groupService.js";
import logger from "../utils/logger.js";





export const createGroup=async(req,res)=>{
    try 
    {
        const group={
            group_name:req.body.group_name,
            group_description:req.body.group_description

        }

        if(req.body.group_name!=="" && req.body.group_description!==""){
           const result=await createGroupService(group)
           console.log(result)
           if(result.rowsAffected[0]==1){
                 sendCreated(res,"group successfully created")
           }
           
        }
        else{
            console.log("body cannot be empty")
        }

        

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