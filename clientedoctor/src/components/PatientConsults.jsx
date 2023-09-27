import ConsultaCard from './ConsultaCard'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PatientConsults = (props) => {
  const navigate = useNavigate()
  let consultas = props.consultas
  useEffect(() => {
    console.log(consultas)
  })

  const crearConsulta = async () => {
    const url = `http://localhost:8080/nuevaConsulta?codPaciente=${props.codPaciente}&idDoctor=${props.idDoctor}`
    const response = await fetch(url)
    const json = await response.json()

    return { status: response.status, idConsultas: json }
  }

  const handleNuevaCons = async () => {
    const nuevaConsulta = await crearConsulta()
    console.log(nuevaConsulta)
    if (nuevaConsulta.status === 200) {
      navigate(
        `/consulta?id=${props.codPaciente}&idConsulta=${nuevaConsulta.idConsultas}&idDoctor=${props.idDoctor}`
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
      <div>
        {consultas.map((consulta) => {
          return <ConsultaCard key={consulta.codConsulta} consulta={consulta} />
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
  idDoctor: PropTypes.string.isRequired
}
export default PatientConsults
