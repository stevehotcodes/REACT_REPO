import { createEventService, deleteAnEventService, getAllEventAttendeesService, getAllEventsService, getOneEventFromAttendeeTable, getOneEventService, registerEventService, updateEventDetailsService } from "../services/eventService.js";
import { sendBadRequest, sendCreated, sendDeleteSuccess, sendNotFound, sendServerError, sendSuccess } from "../helpers/helper.function.js";
import { eventValidator } from "../validators/event.validators.js";
import logger from "../utils/logger.js";
import { getOneUser } from "./users.controllers.js";
import { getOneUserService } from "../services/userService.js";


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


export const updateEventDetails = async (req, res) => {
    try {
        const id = req.params.event_id;
        logger.info(id);
        
        // Check if the event exists
        const event = await getOneEventService(id);
  

        if (event.length==0) {
            sendNotFound(res, "Event does not exist");
        } else {
            const {
                event_id,
                event_name,
                event_description,
                event_date,
                location,
                event_poster_url
            } = event[0];


            const eventDetails = {
                event_id:event_id,
                event_name: req.body.event_name || event_name,
                event_description: req.body.event_description || event_description,
                location: req.body.location || location,
                event_date: req.body.event_date || event_date,
                event_poster_url: req.body.event_poster_url || event_poster_url
            };

            
              
            console.log("event details object",eventDetails)

            const result = await updateEventDetailsService(id, eventDetails);
            logger.info(result);

            if (result.rowsAffected > 0) {
                sendCreated(res, "Event details updated successfully");
            } else {
                sendBadRequest(res, "Failed to update event details");
            }
        }
    } catch (error) {
        logger.error(error);
        sendServerError(res, error.message);
    }
};

export const deleteAnEvent=async(req,res)=>{
    try {
        const event_id=req.params.event_id;
        //check if the event exists

        const event=await getOneEventService(event_id);
        if(event.length==0){
            sendNotFound(res,"Event does not exist")
        }
        else{
            const response =await deleteAnEventService(event_id)
            logger.info(response)

            if(response.rowsAffected>0){
                sendDeleteSuccess(res,"event deleted succesfully")
            }
            else{
                sendBadRequest(res,"Deleting operation unsuccessful please try again")
            }
        }
        
    } catch (error) {
        sendServerError(res,error.message)
    }
}

export const addEventAttendee=async(req,res)=>{
    try {
         const event_id=req.params.event_id;
         console.log(event_id)
         const attendee_id=req.user.user_id

         const eventDetails={
            event_id:event_id,
            attendee_id:attendee_id
         }
         

         const event=await getOneEventService(event_id)

         console.log(event)
        

         if(!event[0]){
            logger.info(event)
            sendNotFound(res,"Event does not exist");
            
         }
         else{
                
                //user in the event attendee table 
                const eventAttendeeDetails=await getOneEventFromAttendeeTable(event_id);
                console.log("event from the attendee table ",eventAttendeeDetails,attendee_id)
                
                if(attendee_id==eventAttendeeDetails[0].attendee_id){
                    sendBadRequest(res, "You already registered for the event")
                }

                else{
                    const result =await registerEventService(eventDetails);
                    logger.info(result)
                    sendSuccess(res,"You registered for the event")

                }
                
            }
            
              
        
    } catch (error) {
        sendServerError(res,error)
    }
}


export const getAllEventAttendees=async(req,res)=>{
    try {

        const event_id=req.params.event_id
        console.log(event_id)
        const event=await getOneEventFromAttendeeTable(event_id);
        logger.info(event)
        if(event.length==0){
            sendNotFound(res,"event does not exists");
        }
        else{
             const result=await getAllEventAttendeesService(event_id)
             logger.info(result)
             if(result.length==0){
                sendNotFound(res,"no attendees found")
             }
             else{
                return res.status(200).json(result)
             }
        }
         

    } catch (error) {
        sendServerError(res,error)
        
    }
}

export const deRegisterAnAttendee=async(req,res)=>{
    try {

        const attendee_id=req.params.attendee_id;
        const event_id=req.body.event_id;
        const result=await getAllEventAttendeesService(event_id)
        
        console.log(result)
        
        
    } catch (error) {
        
    }
}