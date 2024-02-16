import { createEventService, getAllEventsService, getOneEventService, updateEventDetailsService } from "../services/eventService.js";
import { sendBadRequest, sendCreated, sendNotFound, sendServerError, sendSuccess } from "../helpers/helper.function.js";
import { eventValidator } from "../validators/event.validators.js";
import logger from "../utils/logger.js";






export const createEvent=async(req,res)=>{
    try {
        const event={
             event_name:req.body.event_name,
             event_description:req.body.event_description,
             location:req.body.location


        }

        const{error}=eventValidator(event)
        if(error){
            return sendBadRequest(res,error.details[0].message)
         }
         const result=await createEventService(event)
            sendSuccess(res,"event created successfully")

        console.log(result)

        
         
    } catch (error) {
        sendServerError(res,error)
    }
}

export const getAllEvents=async(req,res)=>{
    try {
         const events=await getAllEventsService()
         if(events.length==0){
            sendNotFound(res,"no events found")
        }
        else{
            return res.status(200).json(events)
        }
        
    } catch (error) {
        sendServerError(res,error)
    }
}

export const getOneEvent=async(req,res)=>{
    try {
         const event_id=req.params.event_id
         const events=await getOneEventService(event_id)
         if(events.length==0){
            sendNotFound(res,"no event found")
        }
        else{
            return res.status(200).json(events)
        }
        
    } catch (error) {
        sendServerError(res,error)
    }
}



export const updateEventDetails=async(res,req)=>{
    try {
          const {id}=req.params
          logger.error(id)
        //   const event={
        //     event_name:req.body.event_name,
        //     event_description:req.body.event_description,
        //     location:req.body.event_description
        // }

        // if(req.body.event_name!=="" && req.body.event_description!==""){
        //     const result=await updateEventDetailsService(id,event)
        //     console.log(result)
        //     if(result.rowsAffected[0]==1){
        //           sendCreated(res,"event details updated successfully ")
        //     }
            
        //  }
        //  else{
        //      console.log("body cannot be empty")
        //  }

           
    } catch (error) {
        logger.info(error);
        // sendServerError(res,error)
    }
}