import joi from 'joi'



export const groupValidator=(group)=>{
    const grouDetailsSchema=joi.object({
        group_name:joi.string().required(),
        group_description:joi.string().required()
    })
    return grouDetailsSchema.validate(group)
}