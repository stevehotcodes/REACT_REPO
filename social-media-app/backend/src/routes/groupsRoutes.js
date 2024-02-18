import { Router } from "express";
import { createGroup, deleteGroup, getAllGroups, getOneGroup, updateGroupDetails } from "../controllers/groups.controllers.js";



const groupRouter =Router()

groupRouter.post('/group',createGroup);
groupRouter.get('/group',getAllGroups);
groupRouter.get('/group/:group_id',getOneGroup);
groupRouter.patch('/group/:group_id',updateGroupDetails)
groupRouter.delete('/group/:group_id',deleteGroup)






export default groupRouter