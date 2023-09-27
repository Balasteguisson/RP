import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
    <form onSubmit={handleSubmit}>
      <label>
        Usuario:
        <input type='text' value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Contraseña:
        <input
          type='password'
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <br />
      <button type='submit'>Log In</button>
    </form>
  )
}

export default Login
