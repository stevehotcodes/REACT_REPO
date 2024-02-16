import { Router } from "express";
import { addGroupMembertoAGroup, getGroupMembersofAGroup } from "../controllers/groupMembers.controller.js";






const groupMemberRouter=Router();

groupMemberRouter.get('/:group_id',getGroupMembersofAGroup)
groupMemberRouter.post('/:group_id',addGroupMembertoAGroup)






export default groupMemberRouter