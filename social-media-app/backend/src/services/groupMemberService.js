import { poolRequest,sql } from "../utils/dbConnect.js";

import * as uuid from 'uuid'




export const addGroupMembertoAGroupService =async(group_id,member_id)=>{
        try {
              const id=uuid.v4()
              const result=await poolRequest()
              .input("id",sql.VarChar,id)
              .input("group_id",sql.VarChar,group_id)
              .input("member_id",sql.VarChar,member_id)
             
              .query(`
                     INSERT INTO group_member(id,group_id,member_id)
                     VALUES(@id,@group_id,@member_id);           
              
              `)
              return result                
            
        } catch (error) {
            return error
            
        }
}

export const getGroupMembersofAGroupService=async(group_id)=>{
    try {
         const result=await poolRequest()
         .input("group_id",sql.VarChar,group_id)
         .query(`SELECT group_member.*, tbl_user.*,tbl_group.*
          FROM group_member 
          INNER JOIN tbl_group.group_id=group_member.group_id
          INNER JOIN group_member.member_id=tbl_user.user_id
          WHERE group_member.group_id=@group_id          
          `)

          return result
    } catch (error) {
        return error
        
    }
}

export const getGroupMemebrByIdService=async(member_id)=>{
    try{
        const result =await poolRequest()
        .input('member_id',sql.VarChar,member_id)
        .query(`
                SELECT group_member.*, tbl_user.username, tbl_user.tagname, tbl_user.user_id FROM group_member 
                INNER JOIN tbl_user ON tbl_user.user_id=group_member.member_id
                WHERE group_member.member_id=@member_id
        `)

        return result.recordset

    }
    catch(error){
          return error
    }
}

export const removeAMemberFromAGroupService=async(member_id,group_id)=>{
    try{
        const result =await poolRequest()
        .input('member_id',sql.VarChar,member_id)
        .input('group_id',sql.VarChar,group_id)
        .query(`
               DELETE FROM group_member WHERE member_id=@member_id AND group_id=@group_id
        `)

        return result

    }
    catch(error){
          return error
    }

}
