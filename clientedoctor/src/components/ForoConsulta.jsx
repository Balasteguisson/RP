import { useState } from 'react'
import useForoConsulta from '../hooks/useForoConsulta'
import propTypes from 'prop-types'

const ForoConsulta = (props) => {
  const [mensaje, setMensaje] = useState('')
  const mensajes = useForoConsulta(props.idConsulta)

  const handleSend = async () => {
    let url = `http://localhost:8080/addMensaje`
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idConsulta: props.idConsulta,
        idDoctor: props.idDoctor,
        mensaje: mensaje
      })
    })
    if (response.status === 200) {
      alert('Mensaje enviado correctamente')
      setMensaje('')
    } else {
      alert('Error al enviar mensaje')
    }
  }
  return (
    <div>
      <h1>Foro de Consulta</h1>
      <div className='fc-listaMensajes'>
        {mensajes.map((mensaje) => {
          return (
            <div
              key={mensaje.idMensaje}
              className={`fc-listaMensajes-mensaje${mensaje.EsCreador}`}
            >
              <p className='fc-listaMensajes-mensaje-autor'>
                Dr. {mensaje.nombre} {mensaje.apellido1} {mensaje.apellido2}
              </p>
              <p className='fc-listaMensajes-mensaje-fecha'>
                {mensaje.fechaEnvio}
              </p>
              <p className='fc-listaMensajes-mensaje-texto'>
                {mensaje.contenidoMensaje}
              </p>
            </div>
          )
        })}
      </div>
      <div>
        <input
          type='text'
          placeholder='Escribe un mensaje'
          value={mensaje}
          onChange={(text) => setMensaje(text.target.value)}
        />
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  )
}

ForoConsulta.propTypes = {
  idConsulta: propTypes.string.isRequired,
  idDoctor: propTypes.string.isRequired
}

export default ForoConsulta
