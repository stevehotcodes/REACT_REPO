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
            SELECT comment.*,post.post_date,post.content AS post_content,tbl_user.tagname AS user_who_commented
            FROM comment
            INNER JOIN tbl_user ON tbl_user.user_id=comment.user_id
            INNER JOIN post ON post.post_id=comment.post_id
            WHERE comment.post_id=@post_id
         
         
         `)
         return result.recordset

    } catch (error) {
        return error.originalError.info.message
    }
}

export const deleteCommentPostService=async(comment_id)=>{
    try {
        const result =await poolRequest()
        .input("comment_id",sql.VarChar, comment_id)
        .query(`
                   DELETE FROM comment WHERE comment_id=@comment_id
        `)

        return result
         
        
    } catch (error) {
        return error
    }
}

