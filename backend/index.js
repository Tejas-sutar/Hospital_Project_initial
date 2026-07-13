import express from 'express'
import mongoose from 'mongoose'
import {ConnectDb} from './config/connectDb.js'
import router from './routes/routes.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

ConnectDb()


app.use('/patient',router)

app.get('/',(req,res)=>{
    res.send('Hello')
})



app.listen(4000)