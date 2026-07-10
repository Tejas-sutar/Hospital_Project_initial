import express from 'express'
import {createPatient} from '../countroller/patient.js'

const app = express()

const router = express.Router()

router.get('/create',createPatient)


export default router