import { Router } from "express";
import { addGroupMembertoAGroup, getGroupMembersofAGroup, removeAMemberFromAGroup } from "../controllers/groupMembers.controller.js";






const groupMemberRouter=Router();

groupMemberRouter.get('/:group_id',getGroupMembersofAGroup)
groupMemberRouter.post('/:group_id',addGroupMembertoAGroup)
groupMemberRouter.delete('/:group_id',removeAMemberFromAGroup)






export default groupMemberRouter