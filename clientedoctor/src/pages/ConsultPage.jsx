import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import PatientData from '../components/PatientData'

const ConsultPage = () => {
  const params = new URLSearchParams(window.location.search)
  const codPaciente = params.get('id')
  const idConsulta = params.get('idConsulta')
  const idDoctor = params.get('idDoctor')
  const origen = params.get('origen')
  const location = useLocation()
  const navigate = useNavigate()

  const datosPac = location.state.datosPac

  const handleVolver = () => {
    navigate(`/${origen}?id=${codPaciente}&idDoctor=${idDoctor}`)
  }

  return (
    <div className='cs-container'>
      <header className='cs-header'>
        <h1>Consulta</h1>
        <button onClick={handleVolver}>Volver</button>
      </header>
      <div className='cs-content'>
        <div className='cs-content-chat'></div>
        <div className='cs-content-data'>
          <PatientData datos={datosPac} />
          <div className='cs-content-data-constantes'></div>
          <div className='cs-content-data-diagnostico'></div>
          <div className='cs-content-data-consulta'></div>
        </div>
      </div>
      {codPaciente} {idConsulta} {idDoctor}
    </div>
  )
}
export default ConsultPage
