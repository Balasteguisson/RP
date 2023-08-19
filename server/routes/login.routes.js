import { Router } from 'express'

import { loginUser, signUpUser, getUsers, signUpUser2 } from '../controllers/login.controllers.js'



const router = Router()

//inicio de sesion
router.post('/login', loginUser);

//registro de usuario
router.post('/signUp', signUpUser)

//ver usuarios
router.get('/viewUsers', getUsers)

//finalizar registro de usuario
router.post('/register', signUpUser2)

export default router
