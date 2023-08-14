import React from 'react'
import { StyleSheet } from 'react-native'
import { Formik, useField } from 'formik'

import StyledTextInput from './StyledTextInput'
import StyledText from './StyledText'

const styles = StyleSheet.create({})

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  return (
    <>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
    </>
  )
}

export default FormikInputValue
