import ConsultaCard from './ConsultaCard'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import '../styles/PatientConsults.css'

const PatientConsults = (props) => {
  const navigate = useNavigate()
  let consultas = props.consultas

  const crearConsulta = async () => {
    const url = `http://localhost:8080/nuevaConsulta?codPaciente=${props.codPaciente}&idDoctor=${props.idDoctor}`
    const response = await fetch(url)
    const json = await response.json()

    return { status: response.status, idConsultas: json }
  }

  const handleNuevaCons = async () => {
    const nuevaConsulta = await crearConsulta()
    if (nuevaConsulta.status === 200) {
      navigate(
        `/consulta?id=${props.codPaciente}&idConsulta=${nuevaConsulta.idConsultas}&idDoctor=${props.idDoctor}&origen=paciente`,
        {
          state: {
            datosPac: props.datos
          }
        }
      )
    } else {
      alert('Error al crear consulta')
    }
  }
  return (
    <div className='pc-container'>
      <div className='pc-header'>
        <h2 className='pc-header-title'>Consultas:</h2>
      </div>
      <div className='pc-body'>
        {consultas.map((consulta) => {
          return (
            <ConsultaCard
              key={consulta.idConsultas}
              consulta={consulta}
              datos={props.datos}
            />
          )
        })}
      </div>
      <div className='pc-footer'>
        <button className='pc-footer-button' onClick={handleNuevaCons}>
          Nueva Consulta
        </button>
      </div>
    </div>
  )
}

PatientConsults.propTypes = {
  consultas: PropTypes.array.isRequired,
  codPaciente: PropTypes.string.isRequired,
  idDoctor: PropTypes.string.isRequired,
  datos: PropTypes.object.isRequired
}
export default PatientConsults
