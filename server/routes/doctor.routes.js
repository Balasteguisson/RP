import { Router } from 'express'

//Controladores
import { loginDoctor, landingDoctor } from '../controllers/doctor.controllers.js'

const router = Router()

router.post('/loginDoctor', loginDoctor)
router.get('/getDatosDoctor', landingDoctor)


export default router