import { React, useState } from 'react'
import Dropdown from 'react-native-input-select'

const InputSelect = ({ label, options, name, onValueChange, ...props }) => {
  const [value, setValue] = useState()
  const handleValueChange = (val) => {
    setValue(val)
    onValueChange(val)
  }
  return (
    <Dropdown
      label={label}
      options={options}
      selectedValue={value}
      onValueChange={handleValueChange}
      {...props}
    />
  )
}

export default InputSelect
