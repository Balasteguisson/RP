import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const ConsultaCard = (props) => {
  const navigate = useNavigate()
  const datos = props.consulta
  const datosPac = props.datos
  const handleClickConsulta = () => {
    console.log(
      `/consulta?id=${datos.codPaciente}&idConsulta=${datos.idConsultas}&idDoctor=${props.user}&origen=${props.origen}`
    )
    navigate(
      `/consulta?id=${datos.codPaciente}&idConsulta=${datos.idConsultas}&idDoctor=${props.user}&origen=${props.origen}`,
      { state: { datosPac: datosPac, datosCons: datos } }
    )
  }

  return (
    <div onClick={handleClickConsulta}>
      <div className='cc-container'>
        <div className='cc-header'>
          {props.origen === 'landing' ? (
            <p className='cc-header-subtitle'>
              {datos.nombrePac} {datos.apellidos}
            </p>
          ) : null}
          <p className='cc-header-title'>{datos.fechaInicio.slice(0, 10)}</p>
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
  origen: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
}

export default ConsultaCard
