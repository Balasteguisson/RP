import React from 'react'

import { Formik, useField } from 'formik'

import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Link } from 'react-router-native'

import FormikInputValue from '../components/FormikInputValue'
import StyledText from '../components/StyledText.jsx'

const initialValues = {
  email: '',
  password: ''
}

const validate = (values) => {
  const errors = {}
  if (!values.mail) {
    errors.email = 'Email Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail)) {
    errors.email = 'Invalid email address'
  } else if (!values.password) {
    errors.password = 'Password Required'
  }
  console.log(errors)
  return errors
}

const LoginForm = () => {
  return (
    <>
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
                <Button onPress={handleSubmit} title='Iniciar sesión'></Button>
              </View>
            )
          }}
        </Formik>
      </View>
      <Link to='/register'>
        <StyledText fontSize='subheading' styles={{ selfAlign: 'center' }}>
          ¿No tienes cuenta? Regístrate
        </StyledText>
      </Link>
    </>
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

export default LoginForm
