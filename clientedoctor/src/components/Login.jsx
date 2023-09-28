import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PersInput from './PersInput'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const fetchDatos = async () => {
    const url = `http://localhost:8080/loginDoctor`
    //const url = `http://192.168.100.250:8080/loginDoctor`
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetchDatos()
      if (response.status === 200) {
        const id = await response.json()
        navigate(`/landing?id=${id}`)
        return
      }
      alert('Error al iniciar sesion')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className='lg-form-container' onSubmit={handleSubmit}>
      <div className='lg-form-inputs-container'>
        <PersInput
          label='Usuario'
          onChange={handleUsernameChange}
          value={username}
        />
        <PersInput
          label='Contraseña'
          onChange={handlePasswordChange}
          value={password}
        />
      </div>
      <div className='lg-form-submit-container'>
        <button type='submit'>Log In</button>
      </div>
    </form>
  )
}

export default Login
