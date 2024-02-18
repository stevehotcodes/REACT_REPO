
import { poolRequest,sql } from "../utils/dbConnect.js";
import * as uuid from 'uuid'



export const createEventService=async(event)=>{
    try {
        const  event_id=uuid.v4()
        const result=await poolRequest()
        .input("event_id",sql.VarChar,event_id)
        .input("event_name",sql.VarChar,event.event_name)
        .input("event_description",sql.VarChar,event.event_description)
        .input("location", sql.VarChar,event.location)
        .query(`
               INSERT INTO tbl_event(event_id,event_name,event_description,location)
               VALUES(@event_id,@event_name,@event_description,@location);           
        
        `)
        return result                
      
  } catch (error) {
      return error
      
  }
}


export const getAllEventsService=async()=>{
    try {
        const result =await poolRequest()
        .query(`SELECT * FROM tbl_event`)
        return result.recordset              
      
  } catch (error) {
      return error
      
  }
}

export const getOneEventService=async(event_id)=>{
    try {
        const result =await poolRequest()
        .input('event_id',sql.VarChar,event_id)
        .query(`SELECT * FROM tbl_event WHERE event_id=@event_id`)
        return result.recordset              
      
  } catch (error) {
      return error
      
  }
}

export const updateEventDetailsService=async(event_id,eventDetails)=>{
    try {
        const event=await getOneEventService(event_id)

        if(event){
            const result =await poolRequest()
            .input('event_id',sql.VarChar,event_id)
            .input('event_name',sql.VarChar,eventDetails.event_name)
            .input('event_description',sql.VarChar,eventDetails.event_description)
            .input('event_date',sql.VarChar,eventDetails.event_date)
            .input('location',sql.VarChar,eventDetails.location)
            .input('event_poster_url',sql.VarChar,eventDetails.event_poster_url)
           
            .query(`
                    UPDATE tbl_event
                    SET event_name=@event_name, event_description=@event_description,location=@location,event_poster_url=@event_poster_url,event_date=@event_date
                    WHERE event_id=@event_id
            
            `);

            return result   
        }
        
    } catch (error) {
        return error   
    }
}

export const deleteAnEventService=async(event_id)=>{
    try {

        const response=await poolRequest()
        .input('event_id',sql.VarChar,event_id)
        .query(`
                DELETE FROM tbl_event
                WHERE event_id=@event_id
        
        `)
        return response
        
    } catch (error) {
        return error
    }
}

export const registerEventService=async({event_id,attendee_id})=>{
    try {
        const id=uuid.v4()
        const response=await poolRequest()
        .input('id',sql.VarChar,id)
        .input('event_id',sql.VarChar,event_id)
        .input('attendee_id',sql.VarChar,attendee_id)

        .query(`
                INSERT INTO event_attendee(id,event_id,attendee_id)
                VALUES (@id,@event_id,@attendee_id)
              `)
        return response
    } catch (error) {
       return error 
    }
}

export const getAllEventAttendeesService=async(event_id)=>{
    try {
          const result =await poolRequest()
          .input('event_id',sql.VarChar,event_id)
          .query(`
             SELECT  event_attendee.*, tbl_user.username, tbl_user.email 
             FROM event_attendee 
             INNER JOIN tbl_user ON event_attendee.attendee_id=tbl_user.user_id
             WHERE event_attendee.event_id=@event_id
          `)

          return result.recordset

    } catch (error) {
        return error
    }
}

export const getOneEventFromAttendeeTable=async(event_id)=>{
    try{
         
        const response=await poolRequest()
         .input('event_id',sql.VarChar,event_id)
         .query(`
            SELECT * FROM event_attendee
            WHERE event_id=@event_id
         `)
         return response
    }
    catch(error){
        return error
    }
}