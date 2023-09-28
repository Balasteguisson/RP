import { useEffect, useState } from 'react'

//Componentes
import LandingHeader from '../components/LandingHeader'
import ListaPacientes from '../components/ListaPacientes'
import ListaConsultas from '../components/ListaConsultas'
import '../styles/LandingPage.css'
//Hooks
import useDoctorScreen from '../hooks/useDoctorScreen'

const LandingPage = () => {
  const params = new URLSearchParams(window.location.search)
  const id = params.get('id')
  const [isLoading, setIsLoading] = useState(true)

  const { datos, pacientes, consultas } = useDoctorScreen(id)
  console.log(consultas)
  const nombre = `${datos.nombre} ${datos.apellido1} ${datos.apellido2}`

  useEffect(() => {
    console.log(consultas)
    if (datos && pacientes && consultas) {
      setIsLoading(false)
    }
  }, [datos, pacientes, consultas])

  return (
    <div className='ld-page'>
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <div className='ld-page'>
          <LandingHeader doctorName={nombre} />
          <div className='ld-content'>
            <ListaConsultas idDoctor={id} />
            <ListaPacientes pacientes={pacientes} idDoctor={id} />
          </div>
        </div>
      )}
    </div>
  )
}

export default LandingPage
