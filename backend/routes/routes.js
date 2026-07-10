import express from 'express'
import {createPatient} from '../countroller/patient.js'
import { getallPatients, getuniquepatient, removePatient } from '../countroller/patient.js'

const app = express()

const router = express.Router()

router.post('/create',createPatient)
router.get('/get/:id',getuniquepatient)
router.get('/getAll',getallPatients)
router.put('/remove/:id',removePatient)


export default router