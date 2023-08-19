import { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { Navigate, useNavigate } from 'react-router-native'

const validateForm = (data) => {
  const mail = data.email
  const pas1 = data.password
  const pas2 = data.passwordConfirm
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  //validaciones de registro
  if (!emailRegex.test(mail)) {
    Alert.alert("La dirección de correo electrónico no es válida")
    return false
  }
  if (pas1 !== pas2) {
    Alert.alert("Las contraseñas no coinciden")
    return false
  }
  return true
}


export default validateForm