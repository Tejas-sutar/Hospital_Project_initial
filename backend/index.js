import express from 'express'
import mongoose from 'mongoose'
import {ConnectDb} from './config/connectDb.js'
import router from './routes/routes.js'

const app = express()

app.use(express.json())

ConnectDb()


app.use('/patient',router)

app.get('/',(req,res)=>{
    res.send('Hello')
})



app.listen(4000)