import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ConsultaCard = (props) => {
  const navigate = useNavigate()
  const datos = props.consulta
  const datosPac = props.datos
  const handleClickConsulta = () => {
    navigate(
      `/consulta?id=${datos.codPaciente}&idConsulta=${datos.idConsultas}&idDoctor=${datos.idMedico}&origen=${props.origen}`,
      { state: { datosPac: datosPac, datosCons: datos } }
    )
  }
  console.log(datos.descripcion)
  return (
    <div onClick={handleClickConsulta}>
      <div className='cc-container'>
        <div className='cc-header'>
          <p className='cc-header-title'>{datos.fechaInicio}</p>
          {props.origen === 'landing' ? (
            <p className='cc-header-subtitle'>
              {datos.nombrePac} {datos.apellidos}
            </p>
          ) : null}
        </div>
        <div className='cc-body'>
          <p className='cc-body-text'>
            {datos.diagnostico ? datos.descripcion : 'Sin diagnosticar'}
          </p>
        </div>
      </div>
    </div>
  )
}

ConsultaCard.propTypes = {
  consulta: PropTypes.object.isRequired,
  datos: PropTypes.object.isRequired,
  origen: PropTypes.string.isRequired
}

export default ConsultaCard
