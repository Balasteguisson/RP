import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import '../styles/ConsultPage.css'

//Componentes
import PatientData from '../components/PatientData'
import ControlConsulta from '../components/ControlConsulta'
import ForoConsulta from '../components/ForoConsulta'
import useConsultaPage from '../hooks/useConsultaPage'
import { useState, useEffect } from 'react'

const ConsultPage = () => {
  const params = new URLSearchParams(window.location.search)
  const codPaciente = params.get('id')
  const idConsulta = params.get('idConsulta')
  const idDoctor = params.get('idDoctor')
  const origen = params.get('origen')
  const location = useLocation()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  let datosPac = useConsultaPage(codPaciente)
  let datosCons = location.state.datosCons

  if (datosCons === undefined) {
    datosCons = {}
  }

  const handleVolver = () => {
    if (origen == 'paciente') {
      navigate(`/${origen}?id=${codPaciente}&idDoctor=${idDoctor}`)
    } else if (origen == 'landing') {
      navigate(`/landing?id=${idDoctor}`)
    }
  }

  useEffect(() => {
    if (Object.keys(datosPac).length !== 0) {
      setIsLoading(false)
    }
  }, [datosPac])
  return (
    <div className='cs-container'>
      <header className='cs-header'>
        <h1>Consulta</h1>
        <button onClick={handleVolver}>&laquo;</button>
      </header>
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <div className='consult-page-content'>
          <div className='consult-page-content-column'>
            <ForoConsulta idConsulta={idConsulta} idDoctor={idDoctor} />
          </div>
          <div className='consult-page-content-column'>
            <PatientData datos={datosPac} />
            <ControlConsulta datos={datosCons} idConsulta={idConsulta} />
          </div>
        </div>
      )}
    </div>
  )
}
export default ConsultPage
