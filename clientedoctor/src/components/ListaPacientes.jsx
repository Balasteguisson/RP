import { useEffect } from 'react'
import PropTypes from 'prop-types'

import '../styles/LandingPage.css'
import PatientCard from './PatientCard'

const ListaPacientes = (props) => {
  let { pacientes, idDoctor } = props
  return (
    <div className='ld-content-patients'>
      <h1>Pacientes a su cargo</h1>
      <div className='ld-content-list'>
        {pacientes.map((paciente) => {
          return (
            <PatientCard
              key={paciente.codPaciente}
              patient={paciente}
              idDoctor={idDoctor}
            />
          )
        })}
      </div>
    </div>
  )
}
ListaPacientes.propTypes = {
  pacientes: PropTypes.array.isRequired,
  idDoctor: PropTypes.string.isRequired
}
export default ListaPacientes
