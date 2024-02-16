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
            .input('event_description',sql.VarChar,event.event_description)
            .input('location',sql.VarChar,event.location)
            .query(`
                    UPDATE tbl_event
                    SET event_name=@event_name, event_description=@event_description,location=@location
                    WHERE event_id=@event_id
            
            `);

            return result   
        }
        
    } catch (error) {
        return error   
    }
}
