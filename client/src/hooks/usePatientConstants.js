import { useState, useEffect } from 'react'

const usePatientConstants = (userId) => {
  const [constants, setConstants] = useState([])

  const fetchConstants = async (userId) => {
    const url = `http://localhost:8080/constantesVitales?codPaciente=${userId}`
    // const url = `http://192.168.100.250:8080/constantesVitales?codPaciente=${userId}`
    const response = await fetch(url)
    const json = await response.json()
    setConstants(json)
  }
  useEffect(() => {
    fetchConstants(userId)
  }, [userId])

  const constantes = constants.map(constant => constant)

  return constantes
}

export default usePatientConstants
