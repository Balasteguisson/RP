import { useNavigate } from 'react-router-dom'

const ConsultPage = (props) => {
  const params = new URLSearchParams(window.location.search)
  const codPaciente = params.get('id')
  const idConsulta = params.get('idConsulta')
  const idDoctor = params.get('idDoctor')
  const origen = params.get('origen')

  const navigate = useNavigate()

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
      </div>
      {codPaciente} {idConsulta} {idDoctor}
    </div>
  )
}
export default ConsultPage
