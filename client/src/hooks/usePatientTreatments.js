import { useState, useEffect } from 'react'

const usePatientConstants = (userId) => {
  const [treatments, setTreatments] = useState([])

  const fetchTreatments = async (userId) => {
    // const url = `http://localhost:8080/tratamientos?codPaciente=${userId}`
    const url = `http://192.168.100.250:8080/tratamientos?codPaciente=${userId}`
    const response = await fetch(url)
    const json = await response.json()
    setTreatments(json)
  }
  useEffect(() => {
    fetchTreatments(userId)
  }, [userId])

  const tratamientos = treatments.map(treatment => treatment)

  return tratamientos
}

export default usePatientConstants
