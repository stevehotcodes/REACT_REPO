import { Router } from "express";
import { addEventAttendee, createEvent, deleteAnEvent, getAllEventAttendees, getAllEvents, getOneEvent, updateEventDetails } from "../controllers/events.controller.js";
import {verifyUserIdentity } from "../middlewares/userAuthMiddleware.js";





const eventRouter=Router()

eventRouter.post('/',verifyUserIdentity,createEvent)
eventRouter.get('/attendees/:event_id',verifyUserIdentity,getAllEventAttendees)
eventRouter.get('/',verifyUserIdentity,getAllEvents)
eventRouter.get('/:event_id',verifyUserIdentity,getOneEvent)
eventRouter.put('/:event_id',verifyUserIdentity,updateEventDetails)
eventRouter.delete('/:event_id',verifyUserIdentity,deleteAnEvent)
eventRouter.post('/attendees/:event_id',verifyUserIdentity,addEventAttendee)




export default eventRouter