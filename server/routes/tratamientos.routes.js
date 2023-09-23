import { Router } from 'express'

import { postTratamiento, getTratamientosPaciente } from '../controllers/tratamientos.controllers.js'

const router = Router()

router.post('/registrarTratamiento', postTratamiento)

router.get('/tratamientos', getTratamientosPaciente)

export default router