import Express from 'express'
import dotenv from 'dotenv'
import userRouter from './src/routes/users.route.js'
import bodyParser from 'body-parser'
import logger from './src/utils/logger.js'
import postRouter from './src/routes/postroutes.js'
import groupRouter from './src/routes/groupsRoutes.js'
import eventRouter from './src/routes/eventRoutes.js'
import messageRouter from './src/routes/messagesRoute.js'
import groupMemberRouter from './src/routes/groupMembersRoutes.js'
import commentRouter from './src/routes/commentRoutes.js'
import friendshipRouter from './src/routes/friendshipRoute.js'
import cron from 'node-cron'
import { sendWelcomeEmailToNewUsers } from './src/config/mailConfig.js'
dotenv.config()



const app =Express()
const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//health route
app.get('/health',(req,res)=>{
    res.status(200).json({message:'Hello everyone .....I am healthy😀'})
})


app.use('/api',userRouter);
app.use('/api',postRouter);
app.use('/api',groupRouter);
app.use('/event',eventRouter);
app.use('/message',messageRouter);
app.use('/group-members',groupMemberRouter);
app.use('/comment',commentRouter);
app.use('/friendship',friendshipRouter)


// schedule sending email
cron.schedule('*/5 * * * * *', () => {
    logger.info("sending email after every five seconds ...............")
    sendWelcomeEmailToNewUsers()
    
});


app.listen(port, ()=>{
    logger.info(`The server is running on http://localhost:${port}`);
})
