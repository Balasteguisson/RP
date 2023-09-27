import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PatientCard = ({ patient, idDoctor }) => {
  const navigate = useNavigate()

  const handlePatient = () => {
    navigate(`/paciente?id=${patient.codPaciente}&idDoctor=${idDoctor}`)
  }
  return (
    <article onClick={handlePatient}>
      {patient.nombre} -{patient.apellidos} -{patient.codPaciente}
    </article>
  )
}
PatientCard.propTypes = {
  patient: PropTypes.object.isRequired,
  idDoctor: PropTypes.string.isRequired
}

export default PatientCard
