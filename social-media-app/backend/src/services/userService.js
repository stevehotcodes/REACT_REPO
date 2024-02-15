import { poolRequest, sql } from "../utils/dbConnect.js";


export const addUserService=async(user)=>{
        try {
        
             const result=await poolRequest()
             .input('user_id', sql.VarChar, user.user_id)
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