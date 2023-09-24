import { useState, useEffect } from 'react'

const usePatientConstants = (userId) => {
  const [illnesses, setIllnesses] = useState([])

  const fetchIllnesses = async (userId) => {
    // const url = `http://localhost:8080/tratamientos?codPaciente=${userId}`
    const url = `http://192.168.100.250:8080/getPatologiasPaciente?codPaciente=${userId}`
    const response = await fetch(url)
    const json = await response.json()
    setIllnesses(json)
  }
  useEffect(() => {
    fetchIllnesses(userId)
  }, [userId])

  const enfermedades = illnesses.map(illness => illness)

  return enfermedades
}

export default usePatientConstants
