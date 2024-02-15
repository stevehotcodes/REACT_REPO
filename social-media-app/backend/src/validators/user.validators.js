import joi from 'joi'

export const  userValidator=(user)=>{
    const userSchema=joi.object({
        
        username:joi.string().required(),
        email:joi.string().email().required(),
        tagname:joi.string().required(),
        password:joi.string().required()
    })
    return userSchema.validate(user)
}


export const  userUpdateValidator=(user)=>{
    const userSchema=joi.object({
        
        username:joi.string().required(),
        email:joi.string().email().required(),
        tagname:joi.string().required(),
       
    })
    return userSchema.validate(user)
}