import { useState, useEffect } from 'react'

const useConsultaControl = (idConsulta) => {
  const [participantes, setParticipantes] = useState([])

  const fetchParticipantes = async (idConsulta) => {
    const url = `http://localhost:8080/getParticipantesConsulta?idConsulta=${idConsulta}`
    const response = await fetch(url)
    const json = await response.json()

    setParticipantes(json.participantes)
  }

  useEffect(() => {
    fetchParticipantes(idConsulta)
  }, [idConsulta])

  return { participantes, setParticipantes }
}

export default useConsultaControl