import React from 'react'

import { Text, View, StyleSheet, Button } from 'react-native'
import { Formik } from 'formik'
import FormikInputValue from '../components/FormikInputValue'

const initialValues = {
  email: '',
  password: ''
}

const SignUpForm = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({ handleSubmit }) => {
          return (
            <View style={styles.formContainer}>
              <FormikInputValue
                name='email'
                placeholder='E-mail'
                style={styles.loginField}
              ></FormikInputValue>
              <FormikInputValue
                name='password'
                placeholder='Contraseña'
                secureTextEntry
                style={styles.loginField}
              ></FormikInputValue>
              <Button onPress={handleSubmit} title='Registrarte'></Button>
            </View>
          )
        }}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
    width: '80%',
    borderRadius: 20
  },
  loginField: {
    width: '80%',
    textAlign: 'center'
  }
})

export default SignUpForm
