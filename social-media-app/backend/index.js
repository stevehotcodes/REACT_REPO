import Express from 'express'
import dotenv from 'dotenv'
import userRouter from './src/routes/users.route.js'
import bodyParser from 'body-parser'
import logger from './src/utils/logger.js'
import postRouter from './src/routes/postroutes.js'
import groupRouter from './src/routes/groupsroutes.js'
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
app.use('/api',groupRouter)





app.listen(port, ()=>{
    logger.info(`The server is running on http://localhost:${port}`);
})
