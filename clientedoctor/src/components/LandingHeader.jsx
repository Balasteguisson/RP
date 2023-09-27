import PropTypes from 'prop-types'

const LandingHeader = (props) => {
  return (
    <header className='ld-header'>
      <h1>Bienvenido {props.doctorName}</h1>
      <img
        src='https://neumoexpertosdotorg.files.wordpress.com/2015/10/icon-doctor.png'
        alt=''
        style={{ width: '100px', height: '100px' }}
      />
    </header>
  )
}

LandingHeader.propTypes = {
  doctorName: PropTypes.string.isRequired
}

export default LandingHeader
