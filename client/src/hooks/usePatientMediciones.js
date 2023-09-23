import { useState, useEffect } from 'react'

const usePatientMediciones = (codPaciente, tipo) => {
  const [mediciones, setMediciones] = useState([])

  const fetchMediciones = async (codPaciente, tipo) => {
    // const url = `http://localhost:8080/getMedicionesPacTipo?codPaciente=${codPaciente}&tipo=${tipo}`
    const url = `http://192.168.100.250:8080/getMedicionesPacTipo?codPaciente=${codPaciente}&tipo=${tipo}`
    const response = await fetch(url)
    const json = await response.json()
    setMediciones(json)
  }

  useEffect(() => {
    fetchMediciones(codPaciente, tipo)
  }, [codPaciente, tipo])
  const medicionesList = mediciones.map(medicion => medicion)

  return medicionesList
}

export default usePatientMediciones
