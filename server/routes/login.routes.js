import { Router } from 'express'

import { loginUser, signUpUser } from '../controllers/login.controllers.js'



const router = Router()

router.post('/login', loginUser);

//ruta para signUp
router.post('/signup', signUpUser)

export default router
