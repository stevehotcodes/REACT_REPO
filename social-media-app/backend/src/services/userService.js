import { poolRequest, sql } from "../utils/dbConnect.js";
import * as uuid from 'uuid'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const addUserService=async(user)=>{
        try {
              const user_id=uuid.v4()
              const salt = await bcrypt.genSalt(10);
              const hashPassword=await bcrypt.hash(user.password,salt)
              const result=await poolRequest()
             .input('user_id', sql.VarChar, user_id)
             .input('username',sql.VarChar, user.username)
             .input('email',sql.VarChar,user.email)
             .input('tagname',sql.VarChar,user.tagname)
             .input('password',sql.VarChar,hashPassword)
             .query(`INSERT INTO tbl_user(user_id,username,email,tagname,password)
                    VALUES(@user_id,@username,@email,@tagname,@password)
                    `)
               
             return result
            
        } catch (error) {
            return error
        }
}

export const getAllUserService=async()=>{
    try {
         const result= await poolRequest()
        .query(`SELECT user_id, username,email,tagname FROM tbl_user`)
        return result

    } catch (error) {
        return error
        
    }
}

export const  getOneUserService=async(user_id)=>{
    try{
         const result =await poolRequest()
         .input('user_id',sql.VarChar,user_id)
         .query(`SELECT user_id, username,email,tagname FROM tbl_user WHERE user_id=@user_id`);
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
        .query(`SELECT user_id, username,email,tagname FROM tbl_user WHERE user_id=@user_id`);
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

export const findByCredentialsService = async (user) => {
    try {
        //if there is a user with this username
        const userFoundResponse = await poolRequest()
            .input('email', sql.VarChar, user.email)
            .query('SELECT * FROM tbl_user WHERE email = @email');
            console.log(userFoundResponse)
        if (userFoundResponse.recordset[0]) {
            //take user password from db and compare it with the password from the request with bcrypt
            if (await bcrypt.compare(user.password, userFoundResponse.recordset[0].password)) {
                // send user details back without password and with a jwt token
                let token = jwt.sign(
                    {
                        user_id: userFoundResponse.recordset[0].user_id,
                        username: userFoundResponse.recordset[0].username,
                        email: userFoundResponse.recordset[0].email
                    },
                    process.env.JWT_SECRET, { expiresIn: "2h" } // 2hours
                );
                const { password, ...user } = userFoundResponse.recordset[0];
                console.log('user deatails:',user)
                return { user, token: `JWT ${token}` };
            } else {
                return { error: 'Invalid Credentials' };
            }
        } else {
            return { error: 'Invalid Credentials' };
        }

    } catch (error) {
        return error;
    }

}