import PropTypes from 'prop-types'
import '../styles/PatientPage.css'

const PatientData = (props) => {
  const datos = props.datos
  return (
    <div className='patientData'>
      <div className='pd-header'>
        <h2 className='pd-header-title'>Información del paciente:</h2>
        <p className='pd-header-name'>
          {datos.datosPaciente.nombre} {datos.datosPaciente.apellidos}
        </p>
      </div>
      <div className='pd-body'>
        <ul className='pd-body-dataList'>
          <li>DNI: {datos.datosPaciente.dni}</li>
          <li>
            Nº de tarjeta sanitaria: {datos.datosPaciente.numTarjSanitaria}
          </li>
          <li>
            Fecha de nacimiento:{' '}
            {datos.datosPaciente.fechaNacimiento.split('T')[0]}
          </li>
          <li>Sexo: {datos.datosPaciente.sexo == 0 ? 'Mujer' : 'Hombre'}</li>
        </ul>
        <ul className='pd-body-dataList'>
          <li>Region: {datos.datosPaciente.pais}</li>
          <li>Nº teléfono: {datos.datosPaciente.telefono}</li>
          <li>Peso: {datos.pes?.valorRegistrado1} kg</li>
          <li>Altura: {datos.alt?.valorRegistrado1} cm</li>
        </ul>
      </div>
    </div>
  )
}
PatientData.propTypes = {
  datos: PropTypes.object.isRequired
}

export default PatientData
