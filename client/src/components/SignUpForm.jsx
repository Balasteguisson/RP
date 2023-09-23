import React from 'react'

import { Text, View, StyleSheet, Button, Alert } from 'react-native'
import { Formik } from 'formik'
import FormikInputValue from '../components/FormikInputValue'
import { useNavigate } from 'react-router-native'

import validateForm from '../hooks/validateForm'

const initialValues = {
  email: '',
  password: '',
  passwordConfirm: ''
}
// guille@gmail.com
const SignUpForm = () => {
  const navigate = useNavigate()
  const fetchSignUp = async (data) => {
    // const url = 'http://localhost:8080/signUp'
    const url = 'http://192.168.100.250:8080/signUp'
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response
  }
  const handleSignUp = async (values) => {
    if (validateForm(values)) {
      const data = {
        email: values.email,
        password: values.password
      }
      const response = await fetchSignUp(data)
      const responseJson = await response.json()
      if (responseJson.message === 'Usuario creado') {
        navigate(
          `/register?userId=${responseJson.insertId}&email=${values.email}`
        )
      } else {
        Alert.alert('Error al crear el usuario')
      }
    }
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSignUp(values)}
      >
        {({ handleSubmit }) => {
          return (
            <View style={styles.formContainer}>
              <Text>Cree su cuenta</Text>
              <View style={styles.inputsContainer}>
                <FormikInputValue
                  name='email'
                  placeholder='E-mail'
                  autoCapitalize='none'
                  keyboardType='email-address'
                  style={styles.loginField}
                />
                <FormikInputValue
                  name='password'
                  placeholder='Contraseña'
                  secureTextEntry
                  style={styles.loginField}
                />
                <FormikInputValue
                  name='passwordConfirm'
                  placeholder='Repita su contraseña'
                  secureTextEntry
                  style={styles.loginField}
                />
              </View>
              <Button onPress={handleSubmit} title='Registrarte' />
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
  inputsContainer: {
    width: '100%',
    alignItems: 'center'
  },
  loginField: {
    width: '80%',
    textAlign: 'center'
  }
})

export default SignUpForm
