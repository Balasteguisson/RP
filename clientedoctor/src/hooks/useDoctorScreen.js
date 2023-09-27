import { useEffect, useState } from 'react'

const useDoctorScreen = (codDoctor) => {
  const [datos, setDatos] = useState({})

  const fetchDatos = async (codDoctor) => {
    // const url = `http://localhost:8080/getDatosDoctor?codDoctor=${codDoctor}`
    const url = `http://192.168.100.250:8080/getDatosDoctor?codDoctor=${codDoctor}`
    const response = await fetch(url)
    const json = await response.json()
    console.log(json)
    setDatos(json)
  }

  useEffect(() => {
    fetchDatos(codDoctor)
  }, [codDoctor])

  return datos
}

export default useDoctorScreen