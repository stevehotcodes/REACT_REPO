import { Router } from "express";
import { createGroup, deleteGroup, getAllGroups, getOneGroup, updateGroupDetails } from "../controllers/groups.controllers.js";
import { verifyUserIdentity } from "../middlewares/userAuthMiddleware.js";



const groupRouter =Router()

groupRouter.post('/group',verifyUserIdentity,createGroup);
groupRouter.get('/group',verifyUserIdentity,getAllGroups);
groupRouter.get('/group/:group_id',verifyUserIdentity,getOneGroup);
groupRouter.patch('/group/:group_id',verifyUserIdentity,updateGroupDetails)
groupRouter.delete('/group/:group_id',verifyUserIdentity,deleteGroup)



export default groupRouter