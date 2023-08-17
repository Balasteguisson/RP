import { Router } from 'express'

import { getConstantesVitales } from '../controllers/consVit.controllers.js'

const router = Router()

router.get('/constantesVitales', getConstantesVitales)

export default router