import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import '../styles/LandingPage.css'

const LandingHeader = (props) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/`)
  }
  return (
    <header className='ld-header'>
      <h1>Bienvenido {props.doctorName}</h1>
      <div className='ld-header-aside'>
        <button onClick={handleClick}>Cerrar Sesión</button>
        <img
          src='https://neumoexpertosdotorg.files.wordpress.com/2015/10/icon-doctor.png'
          alt=''
          style={{ width: '100px', height: '100px' }}
        />
      </div>
    </header>
  )
}

LandingHeader.propTypes = {
  doctorName: PropTypes.string.isRequired
}

export default LandingHeader
