import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

//Componentes
import PatientData from '../components/PatientData'
import ControlConsulta from '../components/ControlConsulta'
import ForoConsulta from '../components/ForoConsulta'

const ConsultPage = () => {
  const params = new URLSearchParams(window.location.search)
  const codPaciente = params.get('id')
  const idConsulta = params.get('idConsulta')
  const idDoctor = params.get('idDoctor')
  const origen = params.get('origen')
  const location = useLocation()
  const navigate = useNavigate()

  const datosPac = location.state.datosPac
  const datosCons = location.state.datosCons

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
          <ForoConsulta idConsulta={idConsulta} idDoctor={idDoctor} />
          <ControlConsulta datos={datosCons} idConsulta={idConsulta} />
        </div>
      </div>
      {codPaciente} {idConsulta} {idDoctor}
    </div>
  )
}
export default ConsultPage
