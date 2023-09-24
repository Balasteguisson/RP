import { Router } from 'express'

//import { postTratamiento, getTratamientosPaciente } from '../controllers/tratamientos.controllers.js'
import { findPatologia, postPatologia, getPatologiasPaciente } from '../controllers/diagnosticos.controllers.js'
const router = Router()

router.get('/findPatologia', findPatologia)

router.post('/postPatologia', postPatologia)

router.get('/getPatologiasPaciente', getPatologiasPaciente)

export default router