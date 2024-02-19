import { Router } from "express";
import { addEventAttendee, createEvent, deleteAnEvent, getAllEventAttendees, getAllEvents, getOneEvent, updateEventDetails } from "../controllers/events.controller.js";





const eventRouter=Router()

eventRouter.post('/',createEvent)
eventRouter.get('/attendees/:event_id',getAllEventAttendees)
eventRouter.get('/',getAllEvents)
eventRouter.get('/:event_id',getOneEvent)
eventRouter.put('/:event_id',updateEventDetails)
eventRouter.delete('/:event_id',deleteAnEvent)
eventRouter.post('/attendees/:event_id',addEventAttendee)




export default eventRouter