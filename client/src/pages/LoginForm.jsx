import React from 'react'

import { Formik, useField } from 'formik'

import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Link, useNavigate } from 'react-router-native'

import FormikInputValue from '../components/FormikInputValue'
import StyledText from '../components/StyledText.jsx'

const initialValues = {
  email: '',
  password: ''
}

const LoginForm = () => {
  const navigate = useNavigate()
  const handleSignUp = () => {
    navigate('/signUp')
  }

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
              <View
                style={{ width: '100%', alignItems: 'center', marginTop: 180 }}
              >
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
              <View>
                <StyledText>¿No tienes cuenta?</StyledText>
                <Button onPress={handleSignUp} title='Regístrate'></Button>
              </View>
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
    justifyContent: 'space-around',
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
