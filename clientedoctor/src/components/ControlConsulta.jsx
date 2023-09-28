import propTypes from 'prop-types'
import useConsultaControl from '../hooks/useConsultaControl'
import { useEffect, useState } from 'react'

import BuscadorDiagnostico from './BuscadorDiagnostico'

const ControlConsulta = (props) => {
  const datos = props.datos

  const { participantes, setParticipantes } = useConsultaControl(
    props.idConsulta
  )
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

  return (
    <div className='cc-container'>
      <h1 className='cc-title'>Ajustes consulta</h1>
      <BuscadorDiagnostico datos={datos} idConsulta={props.idConsulta} />
      <div className='cc-body'>
        <div className='cc-body-controlParticantes'>
          <div className='cc-body-limParticipantes'>
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
          <div className='cc-body-participantes'>
            <p>Participantes</p>
            <div className='cc-body-participantes-list'>
              {participantes.map((participante) => {
                return (
                  <div
                    key={participante.idUsuario}
                    className='cc-body-participantes-list-participante'
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
        <div className='cc-body-botones'>
          <button className='cc-body-botones-button' onClick={handleUpdate}>
            Actualizar datos
          </button>
          <button className='cc-body-botones-button' onClick={handleAlta}>
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
