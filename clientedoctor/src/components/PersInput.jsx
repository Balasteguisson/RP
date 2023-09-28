import propTypes from 'prop-types'
const PersInput = ({ label, value, onChange }) => {
  return (
    <div className='field'>
      <input
        type='text'
        value={value}
        onChange={onChange}
        placeholder={label}
      />
      <div className='line'></div>
    </div>
  )
}

PersInput.propTypes = {
  label: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired
}

export default PersInput
