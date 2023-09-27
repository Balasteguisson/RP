import { Router } from 'express'

//Controladores
import { loginDoctor, landingDoctor, getPatientData, createConsulta } from '../controllers/doctor.controllers.js'

const router = Router()

router.post('/loginDoctor', loginDoctor)
router.get('/getDatosDoctor', landingDoctor)
router.get('/getPatientData', getPatientData)
router.get('/nuevaConsulta', createConsulta)

export default router