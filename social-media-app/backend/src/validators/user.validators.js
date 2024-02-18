import joi from 'joi'
// import { esbuildVersion } from 'vite'

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

export const userLoginValidator=({email,password})=>{

    const userSchema=joi.object({
        
        email:joi.string().required(),
        password:joi.string().required(),
           
    })
    return userSchema.validate({email,password});
}

