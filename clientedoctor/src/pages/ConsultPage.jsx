const ConsultPage = (props) => {
  const params = new URLSearchParams(window.location.search)
  const codPaciente = params.get('id')
  const idConsulta = params.get('idConsulta')
  const idDoctor = params.get('idDoctor')

  return (
    <div>
      {codPaciente} {idConsulta} {idDoctor}
    </div>
  )
}
export default ConsultPage
