import { useEffect, useState } from 'react'
import '../styles/BuscadorDiagnostico.css'
import propTypes from 'prop-types'

const BuscadorDiagnostico = (props) => {
  const [diagnostico, setDiagnostico] = useState('')
  const [codDiagnostico, setCodDiagnostico] = useState('')
  const [busqueda, setBusqueda] = useState('')
  const [resultados, setResultados] = useState([])

  const handleBuscar = async () => {
    const url = `http://localhost:8080/findPatologia?nombre=${busqueda}`
    const response = await fetch(url)
    const data = await response.json()
    setResultados(data)
  }
  const updateDiagnostico = async (cod) => {
    const url = `http://localhost:8080/updateDiagnostico?idConsulta=${props.idConsulta}`
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idDiagnosticosCIE10: cod
      })
    })
    if (response.status === 200) {
      alert('Diagnóstico actualizado correctamente')
      return true
    } else {
      alert('Error al actualizar diagnóstico')
      return false
    }
  }

  const handleSelect = (nombre, cod) => {
    if (updateDiagnostico(cod)) {
      setDiagnostico(nombre)
      setCodDiagnostico(cod)
    }
  }

  useEffect(() => {
    setDiagnostico(props.datos.descripcion)
    setCodDiagnostico(props.datos.clase)
  }, [props.datos.clase, props.datos.descripcion])

  return (
    <div className='bs-container'>
      <p>Diagnóstico actual: {diagnostico}</p>
      <input
        className='bs-input'
        type='text'
        placeholder='Buscar diagnóstico'
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <button className='bs-boton' onClick={handleBuscar}>
        Buscar
      </button>
      <div className='bs-resultados'>
        {resultados.map((resultado) => (
          <p
            onClick={() => handleSelect(resultado.nombre, resultado.cod)}
            key={resultado.cod}
          >
            {resultado.nombre}
          </p>
        ))}
      </div>
    </div>
  )
}

BuscadorDiagnostico.propTypes = {
  datos: propTypes.object.isRequired,
  idConsulta: propTypes.string.isRequired
}

export default BuscadorDiagnostico
