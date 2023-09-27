import PatientHeader from '../components/PatientHeader'
import PatientData from '../components/PatientData'
import PatientConsults from '../components/PatientConsults'
import { usePatientScreen } from '../hooks/usePatientScreen'
import { useEffect, useState } from 'react'

const PatientPage = () => {
  const params = new URLSearchParams(window.location.search)
  const id = params.get('id')
  const idDoctor = params.get('idDoctor')

  const [isLoading, setIsLoading] = useState(true)
  const { datos, consultas } = usePatientScreen(id)

  useEffect(() => {
    if (Object.keys(datos).length != '0') {
      setIsLoading(false)
    }
  }, [datos])

  if (!isLoading) {
    const nombre = `${datos.datosPaciente.nombre} ${datos.datosPaciente.apellidos}`
    return (
      <div>
        <PatientHeader paciente={nombre} idDoctor={idDoctor} />
        <PatientData datos={datos} />
        <PatientConsults
          consultas={consultas}
          codPaciente={id}
          idDoctor={idDoctor}
        />
      </div>
    )
  }
}

export default PatientPage
