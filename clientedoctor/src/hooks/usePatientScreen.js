import { useEffect, useState } from "react";

export const usePatientScreen = (codPaciente) => {
  console.log(codPaciente)
  const [datos, setDatos] = useState({})
  const [consultas, setConsultas] = useState([])

  const fetchDatosPatient = async (codPaciente) => {
    const url = `http://localhost:8080/getPatientData?codPaciente=${codPaciente}`
    console.log(url)
    //const url = `http:/
    const response = await fetch(url)
    const json = await response.json()
    let datos = {
      datosPaciente: json.datosPaciente,
      alt: json.alt,
      pes: json.pes,
    }
    console.log('fetch')
    setDatos(datos)
    setConsultas(json.consultas)

  }
  useEffect(() => {
    console.log('cargando datos')
    fetchDatosPatient(codPaciente)
  }, [codPaciente])

  return { datos: datos, consultas: consultas }
}

