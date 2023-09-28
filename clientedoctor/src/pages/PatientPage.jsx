import PatientHeader from '../components/PatientHeader'
import PatientData from '../components/PatientData'
import PatientConsults from '../components/PatientConsults'
import { usePatientScreen } from '../hooks/usePatientScreen'
import { useEffect, useState } from 'react'

import '../styles/PatientPage.css'

const PatientPage = () => {
  const params = new URLSearchParams(window.location.search)
  const id = params.get('id')
  const idDoctor = params.get('idDoctor')

  const [isLoading, setIsLoading] = useState(true)
  const { datos, consultas } = usePatientScreen(id)

  useEffect(() => {
    console.log(isLoading)
    if (datos.datosPaciente !== undefined) {
      console.log('Falseado')
      setIsLoading(false)
    }
  }, [datos, consultas, isLoading])

  if (!isLoading) {
    const nombre = `${datos.datosPaciente.nombre} ${datos.datosPaciente.apellidos}`

    return (
      <div className='pp-container'>
        <PatientHeader paciente={nombre} idDoctor={idDoctor} />
        <div className='pp-content'>
          <PatientData datos={datos} />
          <PatientConsults
            consultas={consultas}
            codPaciente={id}
            idDoctor={idDoctor}
            datos={datos}
          />
        </div>
      </div>
    )
  } else {
    return <div>Cargando...</div>
  }
}

export default PatientPage
