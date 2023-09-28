import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import '../styles/PatientPage.css'
const PatientHeader = (props) => {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(`/landing?id=${props.idDoctor}`)
  }
  return (
    <div className='pp-header'>
      <h1 className='pp-header-text'>{props.paciente}</h1>
      <button onClick={handleBack} className='pp-header-button'>
        Volver
      </button>
    </div>
  )
}

PatientHeader.propTypes = {
  paciente: PropTypes.string.isRequired,
  idDoctor: PropTypes.string.isRequired
}
export default PatientHeader
