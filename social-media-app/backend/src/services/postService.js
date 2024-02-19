import { poolRequest, sql } from "../utils/dbConnect.js";
import * as uuid from 'uuid'
import logger from "../utils/logger.js";




export const createPostService=async(post)=>{

    try {
        const post_id=uuid.v4();
        const photo_id =uuid.v4();
        const transaction = new sql.Transaction();

        await transaction.begin();
        //insert details to the post table 
        const result1=await poolRequest(transaction)
        .input("post_id",sql.VarChar,post_id)
        .input("user_id",sql.VarChar,post.user_id)
        .input("content",sql.VarChar,post.content)
        .query(`INSERT INTO post (post_id,user_id,content)VALUES (@post_id,@user_id, @content)`
    
        );
        //insert the details in photos table
        const  result2 =await poolRequest(transaction)
        .input("photo_id",sql.VarChar,photo_id)
        .input("post_id",sql.VarChar,post_id)
        .input("user_id",sql.VarChar,post.user_id)
        .input("photo_url",sql.VarChar,post.image)
        .input("isProfileImage",sql.Int,0)
        .query(`INSERT INTO photo (photo_id,post_id,user_id,photo_url,isProfileImage)VALUES (@photo_id,@post_id,@user_id, @photo_url,0)`);

         // Commit transaction
        await transaction.commit();

        return {result1,result2}

        
    } catch (error) {
        return error
    }

}

export const getAllPostsService=async()=>{
    try {
        const result=await poolRequest()
        .query(
            `SELECT * FROM post`
        )
        return result.recordset
    } catch (error) {
        return error
    }
}

export const getOnePostService=async(post_id)=>{
    try{
        const result = await poolRequest()
        .input("post_id", sql.VarChar, post_id)
        .query(`
            SELECT post.*, tbl_user.username, tbl_user.email,tbl_user.tagname 
            FROM post
            JOIN tbl_user ON tbl_user.user_id = post.user_id
            WHERE post.post_id = @post_id
        `);
    
         return result.recordset
    }
    catch(error){
            return error
    }

}

export const updateAPostService =async(post_id,content)=>{
        try {
            const result =await poolRequest()
            .input("post_id", sql.VarChar, post_id)
            .input("content", sql.VarChar, content)
            .query(`
            
                    UPDATE post
                    SET content=@content
                    WHERE post_id=@post_id
            
            `)
            return result
            
            
        } catch (error) {
            return error
            
        }



}

export const deleteAPostService =async(post_id)=>{
    try {
        
         const result=await poolRequest()
         .input('post_id',sql.VarChar,post_id)
         .query(`
                DELETE FROM post
                WHERE post_id=@post_id
         `)

         return result
        
    } catch (error) {
        return error
    }

}