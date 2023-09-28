import { useState } from 'react'
import useForoConsulta from '../hooks/useForoConsulta'
import propTypes from 'prop-types'
import PersInput from './PersInput'

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
      setMensaje('')
    } else {
      alert('Error al enviar mensaje')
    }
  }
  return (
    <div className='foro-consulta-container'>
      <h1>Foro de Consulta</h1>
      <div className='foro-consulta-listaMensajes'>
        {mensajes.map((mensaje) => {
          return (
            <div
              key={mensaje.idMensaje}
              className={`foro-consulta-listaMensajes-mensaje foro-consulta-listaMensajes-mensaje-${mensaje.EsCreador}`}
            >
              <span className='foro-consulta-listaMensajes-mensaje-autor'>
                Dr. {mensaje.nombre} {mensaje.apellido1} {mensaje.apellido2}
              </span>
              <div className='foro-consulta-listaMensajes-contenido'>
                <span className='foro-consulta-listaMensajes-mensaje-texto'>
                  {mensaje.contenidoMensaje}
                </span>
                <span className='foro-consulta-listaMensajes-mensaje-fecha'>
                  {mensaje.fechaEnvio.split('T')[0]}
                </span>
              </div>
            </div>
          )
        })}
      </div>
      <div className='foro-consulta-input-container'>
        <PersInput
          label='Escribe un mensaje'
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
