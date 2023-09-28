import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const PatientCard = ({ patient, idDoctor }) => {
  const navigate = useNavigate()

  const handlePatient = () => {
    navigate(`/paciente?id=${patient.codPaciente}&idDoctor=${idDoctor}`)
  }
  return (
    <article className='pc-container' onClick={handlePatient}>
      <div className='pc-name-container'>
        {patient.nombre} {patient.apellidos}
      </div>
      <div className='pc-code-container'>{patient.codPaciente}</div>
    </article>
  )
}
PatientCard.propTypes = {
  patient: PropTypes.object.isRequired,
  idDoctor: PropTypes.string.isRequired
}

export default PatientCard
