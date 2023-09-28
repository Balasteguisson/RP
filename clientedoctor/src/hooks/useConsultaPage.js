import { useEffect, useState } from "react";

const useConsultaPage = (codPaciente) => {
  const [datos, setDatos] = useState({});

  const fetchDatosPaciente = async (codPaciente) => {
    const url = `http://localhost:8080/getPatientData?codPaciente=${codPaciente}`;
    const response = await fetch(url);
    const json = await response.json();
    setDatos(json);
  }

  useEffect(() => {
    fetchDatosPaciente(codPaciente)
  }, [codPaciente])

  return datos

}

export default useConsultaPage