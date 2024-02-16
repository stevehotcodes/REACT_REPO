import { Router } from "express";
import { createGroup, getAllGroups, getOneGroup } from "../controllers/groups.controllers.js";



const groupRouter =Router()

groupRouter.post('/group',createGroup);
groupRouter.get('/group',getAllGroups);
groupRouter.get('/group/:group_id',getOneGroup);








export default groupRouter