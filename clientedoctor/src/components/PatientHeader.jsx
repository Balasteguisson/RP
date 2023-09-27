import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PatientHeader = (props) => {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(`/landing?id=${props.idDoctor}`)
  }
  useEffect(() => {
    console.log('desde header' + props)
  }, [props])
  return (
    <div>
      <h1>{props.paciente}</h1>
      <button onClick={handleBack}>Volver</button>
    </div>
  )
}

PatientHeader.propTypes = {
  paciente: PropTypes.string.isRequired,
  idDoctor: PropTypes.string.isRequired
}
export default PatientHeader
