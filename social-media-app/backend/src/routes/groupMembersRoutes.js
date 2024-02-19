import { Router } from "express";
import { addGroupMembertoAGroup, getGroupMembersofAGroup, removeAMemberFromAGroup } from "../controllers/groupMembers.controller.js";
import {verifyUserIdentity } from "../middlewares/userAuthMiddleware.js";






const groupMemberRouter=Router();

groupMemberRouter.get('/:group_id',verifyUserIdentity,getGroupMembersofAGroup)
groupMemberRouter.post('/:group_id',verifyUserIdentity,addGroupMembertoAGroup)
groupMemberRouter.delete('/:group_id',verifyUserIdentity,removeAMemberFromAGroup)






export default groupMemberRouter