import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

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
      console.log(idDoctor)
      navigate(`/${origen}?id=$codPaciente}&idDoctor=${idDoctor}`)
    } else if (origen == 'landing') {
      console.log(idDoctor)
      navigate(`/landing?id=${datosCons.idUsuario}`)
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
        <button onClick={handleVolver}>Volver</button>
      </header>
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <div className='cs-content'>
          <div className='cs-content-chat'></div>
          <div className='cs-content-data'>
            <PatientData datos={datosPac} />
            <ForoConsulta idConsulta={idConsulta} idDoctor={idDoctor} />
            <ControlConsulta datos={datosCons} idConsulta={idConsulta} />
          </div>
        </div>
      )}
    </div>
  )
}
export default ConsultPage
