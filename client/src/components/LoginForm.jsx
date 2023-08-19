import React, { useState } from 'react'

import { Formik } from 'formik'

import { View, StyleSheet, Button, Text, Alert } from 'react-native'
import { useNavigate } from 'react-router-native'

import FormikInputValue from '../components/FormikInputValue'
import StyledText from '../components/StyledText.jsx'

const initialValues = {
  email: '',
  password: ''
}

const LoginForm = () => {
  const fetchUser = async (values) => {
    const url = 'http://192.168.100.250:8080/login'
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    return data[0][0].codPaciente
  }

  const navigate = useNavigate()
  const handleSignUp = () => {
    navigate('/signUp')
  }

  const handleLogin = async (values) => {
    const response = await fetchUser(values)
    console.log(response)
    if (response === undefined) {
      Alert.alert('Usuario o contraseña incorrectos')
      return
    } else {
      navigate(`/landing?email=${values.email}&id=${response}`)
    }
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          handleLogin(values)
        }}
      >
        {({ handleSubmit }) => {
          return (
            <View style={styles.formContainer}>
              <View style={{ width: '100%', alignItems: 'center' }}>
                <FormikInputValue
                  name='email'
                  placeholder='E-mail'
                  keyboardType='email-address'
                  autoCapitalize='none'
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
    height: '90%',
    width: '80%',
    borderRadius: 20,
    marginBottom: '20%'
  },
  loginField: {
    width: '80%',
    textAlign: 'center'
  }
})

export default LoginForm
