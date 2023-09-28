import { useState, useEffect } from 'react'

const useForoConsulta = (idConsulta) => {
  const [mensajes, setMensajes] = useState([])
  const fetchMensajes = async (idConsulta) => {
    let url = `http://localhost:8080/getMensajes?idConsulta=${idConsulta}`
    const response = await fetch(url)
    const json = await response.json()
    setMensajes(json)
  }
  useEffect(() => {
    fetchMensajes(idConsulta)
  }, [idConsulta])
  return mensajes
}

export default useForoConsulta