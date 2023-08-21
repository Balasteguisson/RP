import { Router } from 'express'

import { getConstantesVitales, postConstanteVital } from '../controllers/consVit.controllers.js'

const router = Router()

router.get('/constantesVitales', getConstantesVitales)

router.post('/registrarMedicionCV', postConstanteVital)

export default router