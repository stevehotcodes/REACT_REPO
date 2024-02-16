import { sendBadRequest, sendNotFound, sendServerError, sendSuccess } from "../helpers/helper.function.js";
import { addGroupMembertoAGroupService, getGroupMembersofAGroupService } from "../services/groupMemberService.js";

export const getGroupMembersofAGroup=async(req,res)=>{
    try {
          const group_id=req.params.group_id
         const members=await  getGroupMembersofAGroupService(group_id)

         console.log()
         if(members.length==0){
            sendNotFound(res,"no members in group")
         }
         return res.status(200).json(members)

        
    } catch (error) {
        sendServerError(res,error)
    }
}
export const addGroupMembertoAGroup=async(req,res)=>{
    try {
        const group_id=req.params.group_id
        const member_id=req.body.member_id

        console.log(group_id,member_id)

        if(!group_id || ! member_id){
           console.log("group id or member_id is required")
           sendBadRequest(res,"group id or member_id is required")
        }
        else{
            // console.log("everthingis good")
            const response=await addGroupMembertoAGroupService(group_id,member_id);
            console.log(response)
            if(response.rowsAffected>0){
                sendSuccess(res,"group member added to the group")
            }
        }
        
    } 
    catch (error) {
        sendServerError(res,error)
    }
}