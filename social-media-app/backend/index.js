import Express from 'express'
import dotenv from 'dotenv'
dotenv.config()



const app =Express()
const port = process.env.PORT || 3000

//health route
app.get('/health',(req,res)=>{
    res.status(200).json({message:'Hello everyone .....I am healthy😀'})
})





app.listen(port, ()=>{
    console.log(`The server is running on http://localhost:${port}`);
})
