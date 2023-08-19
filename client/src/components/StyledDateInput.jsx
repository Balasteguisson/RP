import React, { useState } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10
  },
  error: {
    borderColor: 'red'
  }
})

const StyledDateInput = ({ style = {}, error, name, ...props }) => {
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)

  const onFocus = () => {
    setShow(true)
  }

  const onBlur = () => {
    setShow(false)
  }

  const onChange = (event, selectedDate) => {
    setShow(false)
    setDate(selectedDate)
  }

  return (
    <>
      <TextInput
        style={[styles.textInput, style, error && styles.error]}
        onFocus={onFocus}
        onBlur={onBlur}
        value={date.toLocaleDateString()}
        placeholder='Fecha de nacimiento'
        editable={false}
      />
      {show && (
        <DateTimePicker
          name={name}
          {...props}
          value={date}
          mode='date'
          display='spinner'
          onChange={onChange}
        />
      )}
    </>
  )
}

export default StyledDateInput
