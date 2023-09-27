import { useEffect, useState } from 'react'

const useDoctorScreen = (codDoctor) => {
  const [datos, setDatos] = useState({})
  const [pacientes, setPacientes] = useState([])
  const [consultas, setConsultas] = useState([])

  const fetchDatosDoctor = async (codDoctor) => {
    const url = `http://localhost:8080/getDatosDoctor?codDoctor=${codDoctor}`
    //const url = `http://192.168.100.250:8080/getDatosDoctor?codDoctor=${codDoctor}`
    const response = await fetch(url)
    const json = await response.json()

    setDatos(json.datosdoctor)
    setPacientes(json.pacientes)
    setConsultas(json.consultas)
  }

  useEffect(() => {
    fetchDatosDoctor(codDoctor)
  }, [codDoctor])

  return { datos: datos, pacientes: pacientes, consultas: consultas }
}

export default useDoctorScreen