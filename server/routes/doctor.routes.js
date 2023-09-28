import { Router } from 'express'

//Controladores
import { loginDoctor, landingDoctor, getPatientData, createConsulta, getParticipantesConsulta, updateConsulta, updateDiagnostico, sendMensaje, fetchMensajes } from '../controllers/doctor.controllers.js'

const router = Router()

router.post('/loginDoctor', loginDoctor)
router.get('/getDatosDoctor', landingDoctor)
router.get('/getPatientData', getPatientData)
router.get('/nuevaConsulta', createConsulta)
router.get('/getParticipantesConsulta', getParticipantesConsulta)
router.put('/updateConsulta', updateConsulta)
router.put('/updateDiagnostico', updateDiagnostico)
router.post('/addMensaje', sendMensaje)
router.get('/getMensajes', fetchMensajes)
export default router