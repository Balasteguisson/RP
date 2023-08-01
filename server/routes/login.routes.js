import { Router } from 'express'

import { loginUser, signUpUser, getUsers } from '../controllers/login.controllers.js'



const router = Router()

//inicio de sesion
router.post('/login', loginUser);

//registro de usuario
router.post('/signUp', signUpUser)

//ver usuarios
router.get('/viewUsers', getUsers)

export default router
