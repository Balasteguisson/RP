import { useState, useEffect } from 'react'


const useSignUpMail = async (data) => {

  const mail = data.email
  const pas1 = data.password
  const pas2 = data.passwordConfirm
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  //validaciones de registro
  if (!emailRegex.test(mail)) {
    alert("La dirección de correo electrónico no es válida")
    return
  }
  if (pas1 !== pas2) {
    alert("Las contraseñas no coinciden")
    return
  }


  /*
  const url = `http://localhost:8080/signUp`
  const userIdCreado = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const userId = await userIdCreado.json()
  console.log(userId)
  if (userId.message === 'Usuario creado') {
    navigate(`/signUp2?userId=${userId.insertId}`)
  }
  */
  return '13' //normalmente devuelve userId
}

export default useSignUpMail