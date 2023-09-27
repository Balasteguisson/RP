//Componentes
import LandingHeader from '../components/LandingHeader'

import '../styles/LandingPage.css'
//Hooks
import useDoctorScreen from '../hooks/useDoctorScreen'

const LandingPage = () => {
  const params = new URLSearchParams(window.location.search)
  const id = params.get('id')

  const datos = useDoctorScreen(id)
  const nombre = `${datos.nombre} ${datos.apellido1} ${datos.apellido2}`
  return (
    <div className='ld-page'>
      <LandingHeader doctorName={nombre} />
      <div className='ld-content'>
        <div className='ld-content-consult'>
          <h2 className='ld-content-title'>Consultas</h2>
        </div>
        <div className='ld-content-patients'>
          <h2 className='ld-content-title'>Pacientes</h2>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
