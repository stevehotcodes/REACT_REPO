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


export const getAllGroupsService=async(req,res)=>{
    try {

        const result =await poolRequest()
        .query(`SELECT * FROM tbl_group`)

        return result.recordset
        
    } catch (error) {
        return error
        
    }
}