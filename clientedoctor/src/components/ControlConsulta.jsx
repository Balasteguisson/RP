import propTypes from 'prop-types'
import useConsultaControl from '../hooks/useConsultaControl'
import { useEffect, useState } from 'react'

import BuscadorDiagnostico from './BuscadorDiagnostico'
import '../styles/ControlConsulta.css'

const ControlConsulta = (props) => {
  const datos = props.datos
  const { participantes } = useConsultaControl(props.idConsulta)
  const [totParticipantes, setTotParticipantes] = useState(2)

  const handleUpdate = async () => {
    const url = `http://localhost:8080/updateConsulta?idConsulta=${props.idConsulta}`
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        limiteParticipantes: totParticipantes
      })
    })
    if (response.status === 200) {
      alert('Datos actualizados correctamente')
    } else {
      alert('Error al actualizar datos')
    }
  }
  const handleAlta = async () => {}

  useEffect(() => {
    setTotParticipantes(datos.numeroParticipantesMax)
  }, [datos])

  return (
    <div className='cco-container'>
      <div className='cco-header'>
        <h2 className='cco-title'>Ajustes consulta:</h2>
      </div>
      <BuscadorDiagnostico datos={datos} idConsulta={props.idConsulta} />
      <div className='cco-body'>
        <div className='cco-body-controlParticantes'>
          <div className='cco-body-limParticipantes'>
            <p>Límite de participantes</p>
            <input
              className='cc-body-limParticipantes-input'
              type='number'
              min='1'
              max='10'
              value={totParticipantes}
              onChange={(e) => setTotParticipantes(e.target.value)}
            />
          </div>
          <div className='cco-body-participantes'>
            <p>Participantes</p>
            <div className='cco-body-participantes-list'>
              {participantes.map((participante) => {
                return (
                  <div
                    key={participante.idUsuario}
                    className='cco-body-participantes-list-participante'
                  >
                    <p>
                      {participante.nombre} {participante.apellido1}{' '}
                      {participante.apellido2}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className='cco-body-botones'>
          <button className='cco-body-botones-button' onClick={handleUpdate}>
            Actualizar datos
          </button>
          <button className='cco-body-botones-button' onClick={handleAlta}>
            Dar alta
          </button>
        </div>
      </div>
    </div>
  )
}

ControlConsulta.propTypes = {
  idConsulta: propTypes.string.isRequired,
  datos: propTypes.object.isRequired
}

export default ControlConsulta
