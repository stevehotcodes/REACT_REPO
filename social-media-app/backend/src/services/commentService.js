// import { pool } from "mssql";
import { poolRequest,sql } from "../utils/dbConnect.js";
import * as uuid from 'uuid'




export const addCommentService=async(comment,post_id)=>{
    try {

        const  comment_id=uuid.v4()
        const result=await poolRequest()
        .input("comment_id",sql.VarChar,comment_id)
        .input("post_id",sql.VarChar,post_id)
        .input("user_id",sql.VarChar,comment.user_id)
        .input("content", sql.VarChar,comment.content)
        .query(`
               INSERT INTO comment(comment_id,post_id,user_id,content)
               VALUES(@comment_id,@post_id,@user_id,@content);           
        
        `)
        return result                
        
    } catch (error) {
        return error
    }

}

export const getCommentOfAPostService=async(post_id)=>{
    try {
         const result =await poolRequest()
         .input("post_id",sql.VarChar,post_id)
         .query(`
            SELECT *
            FROM comment
            WHERE post_id=@post_id
         
         
         `)
         return result.recordset

    } catch (error) {
        return error
    }
}