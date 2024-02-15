import { Router } from "express";
import { createGroup, getAllGroups } from "../controllers/groups.controllers.js";



const groupRouter =Router()

groupRouter.post('/group',createGroup);
groupRouter.get('/group',getAllGroups)







export default groupRouter