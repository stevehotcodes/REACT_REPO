import { sendBadRequest, sendDeleteSuccess, sendNotFound, sendServerError, sendSuccess } from "../helpers/helper.function.js";
import { addGroupMembertoAGroupService, getGroupMembersofAGroupService, getGroupMemebrByIdService, removeAMemberFromAGroupService } from "../services/groupMemberService.js";

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
        const member_id=req.user.user_id

        const members=await getGroupMemebrByIdService(member_id)

        console.log(members);
        if(members.length>0){
            // const foundMember=members.find((member)=>{member.member_id==req.body.member_id});
            console.log("from the if condition",members)
            sendBadRequest(res,"the group member already exist")
        }
        else{
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
                sendSuccess(res,"you are a new member added to the group")
            }
            else{
                sendNotFound(res,"error in adding the member to the group please try again")
            }

        }
        }
           
        
    } 
    catch (error) {
        sendServerError(res,error.message)
    }
}

export const removeAMemberFromAGroup=async(req,res)=>{
      try {
        const group_id=req.params.group_id
        const member_id=req.body.member_id

        const members=await getGroupMemebrByIdService(member_id)

        console.log(members);
        if(members.length==0){
            // const foundMember=members.find((member)=>{member.member_id==req.body.member_id});
            console.log("from the if condition",members)
            sendNotFound(res,'user not found')
        }
        else{
             const response=await removeAMemberFromAGroupService(member_id,group_id);
             console.log(response)
             if(response.rowsAffected>0){
                sendDeleteSuccess(res,"Member removed from the group successfully ")
             }

        }

      } catch (error) {
        sendServerError(res,error)
      }
}


