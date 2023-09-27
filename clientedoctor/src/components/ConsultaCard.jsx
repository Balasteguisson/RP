import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const ConsultaCard = (props) => {
  const navigate = useNavigate()
  const datos = props.consulta
  const handleClickConsulta = () => {
    navigate(
      `/consulta?id=${datos.codPaciente}&idConsulta=${datos.idConsultas}&idDoctor=${datos.idMedico}&origen=paciente`
    )
  }
  return (
    <div onClick={handleClickConsulta}>
      <div className='cc-container'>
        <div className='cc-header'>
          <p className='cc-header-title'>{datos.fechaInicio}</p>
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
  consulta: PropTypes.array.isRequired
}

export default ConsultaCard
