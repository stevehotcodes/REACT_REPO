import { Router } from "express";
import { createEvent, getAllEvents, getOneEvent, updateEventDetails } from "../controllers/events.controller.js";





const eventRouter=Router()

eventRouter.post('/',createEvent)
eventRouter.get('/',getAllEvents)
eventRouter.get('/:event_id',getOneEvent)
eventRouter.put('/:id',updateEventDetails)



export default eventRouter