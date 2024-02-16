import joi from 'joi'





export const eventValidator=(event)=>{
    const eventDetailsSchema=joi.object({
        event_name:joi.string().required(),
        event_description:joi.string().required(),
        location:joi.string().required()
    })
    return eventDetailsSchema.validate(event)
}

