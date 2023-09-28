import propTypes from 'prop-types'

import ConsultaCard from './ConsultaCard'

const ListaConsultas = (props) => {
  let consultas = props.consultas
  return (
    <div className='ld-content-consults'>
      <h1>Lista de consultas</h1>
      <div className='ld-content-list'>
        {consultas.map((consulta) => {
          return (
            <ConsultaCard
              key={consulta.idConsultas}
              consulta={consulta}
              origen='landing'
              user={props.idDoctor}
            />
          )
        })}
      </div>
    </div>
  )
}

ListaConsultas.propTypes = {
  consultas: propTypes.array.isRequired,
  idDoctor: propTypes.string.isRequired
}

export default ListaConsultas
