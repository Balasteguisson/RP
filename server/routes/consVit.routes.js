import { Router } from 'express'

import { getConstantesVitales, postConstanteVital, getMedicionesPacTipo } from '../controllers/consVit.controllers.js'

const router = Router()

router.get('/constantesVitales', getConstantesVitales)

router.post('/registrarMedicionCV', postConstanteVital)

router.get('/getMedicionesPacTipo', getMedicionesPacTipo)

export default router