import { poolRequest, sql } from "../utils/dbConnect.js";
import * as uuid from 'uuid'


export const addUserService=async(user)=>{
        try {
              const user_id=uuid.v4()
              const result=await poolRequest()
             .input('user_id', sql.VarChar, user_id)
             .input('username',sql.VarChar, user.username)
             .input('email',sql.VarChar,user.email)
             .input('tagname',sql.VarChar,user.tagname)
             .input('password',sql.VarChar,user.password)
             .query(`INSERT INTO tbl_user(user_id,username,email,tagname,password) VALUES(@user_id,@username,@email,@tagname,@password)`)
               
             return result
            
        } catch (error) {
            return error
        }
}

export const getAllUserService=async()=>{
    try {
         const result= await poolRequest()
        .query(`SELECT * FROM tbl_user`)
        return result

    } catch (error) {
        return error
        
    }
}

export const  getOneUserService=async(user_id)=>{
    try{
         const result =await poolRequest()
         .input('user_id',sql.VarChar,user_id)
         .query(`SELECT * FROM tbl_user WHERE user_id=@user_id`);
         return result.recordset
    }
    catch(error){
        return error

    }
}

export const updateUserDetailsService=async(user_id,userDetails)=>{
    try {
        //check if the user exist
        const user=await poolRequest()
        .input('user_id',sql.VarChar,user_id)
        .query(`SELECT * FROM tbl_user WHERE user_id=@user_id`);
        if(user){
            const response=await poolRequest()
            .input('user_id',sql.VarChar,user_id)
            .input('username',sql.VarChar, userDetails.username)
            .input('email',sql.VarChar,userDetails.email)
            .input('tagname',sql.VarChar,userDetails.tagname)
             .query(`UPDATE tbl_user
                     SET username=@username,
                         email=@email,
                        tagname=@tagname
                    WHERE user_id=@user_id
             
             `)
             return response
        }
        
    } catch (error) {
        return error
    }
}

export const deleteUserService=async (user_id)=>{
    try {
        const user=await getOneUserService(user_id);
        if(user){
            const response=await poolRequest()
            .input('user_id',sql.VarChar,user_id)
            .query('DELETE FROM tbl_user WHERE user_id=@user_id');
            return response

        }
        
        
    } catch (error) {
        return error
    }
}