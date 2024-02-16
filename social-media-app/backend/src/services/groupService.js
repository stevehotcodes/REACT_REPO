import { poolRequest,sql } from "../utils/dbConnect.js";
import * as uuid from 'uuid'




export const createGroupService =async(group)=>{
        try {
              const  group_id=uuid.v4()
              const result=await poolRequest()
              .input("group_id",sql.VarChar,group_id)
              .input("group_name",sql.VarChar,group.group_name)
              .input("group_description",sql.VarChar,group.group_description)
              .query(`
                     INSERT INTO tbl_group(group_id,group_name,group_description)
                     VALUES(@group_id,@group_name,@group_description);           
              
              `)
              return result                
            
        } catch (error) {
            return error
            
        }
}


export const getAllGroupsService=async()=>{
    try {

        const result =await poolRequest()
        .query(`SELECT * FROM tbl_group`)

        return result.recordset
        
    } catch (error) {
        return error
        
    }
}

export const getOnegroupService=async(group_id)=>{
    try {
        
        const result =await poolRequest()
        .input('group_id',sql.VarChar,group_id)
        .query(`SELECT * FROM tbl_group WHERE group_id=@group_id`)
        return result.recordset[0]
        
    } catch (error) {
        return error

    }
}

export const updateGroupDetailsService=async(group_id,groupDetails)=>{
    try {
        const group=await getOnegroupService(group_id)

        if(group){
            const result =await poolRequest()
            .input('group_id',sql.VarChar,group_id)
            .input('group_name',sql.VarChar,groupDetails.group_name)
            .input('group_description',sql.VarChar,group.group_description)
            .query(`
                    UPDATE tbl_group
                    SET group_name=@group_name, group_description=@group_description
                    WHERE group_id=@group_id
            
            `);

            return result
            
        }
        
    } catch (error) {
        return error   
    }
}