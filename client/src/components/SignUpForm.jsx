import React from 'react'

import { Text, View, StyleSheet, Button } from 'react-native'
import { Formik } from 'formik'
import FormikInputValue from '../components/FormikInputValue'
import { useNavigate } from 'react-router-native'

import StyledText from '../components/StyledText'

import useSignUpMail from '../hooks/useSignUpMail'

const initialValues = {
  email: '',
  password: '',
  passwordConfirm: ''
}
//guille@gmail.com
const SignUpForm = () => {
  const navigate = useNavigate()
  navigate(`/register?userId=13`)
  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          let res = useSignUpMail(values)
        }}
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
                ></FormikInputValue>
                <FormikInputValue
                  name='password'
                  placeholder='Contraseña'
                  secureTextEntry
                  style={styles.loginField}
                ></FormikInputValue>
                <FormikInputValue
                  name='passwordConfirm'
                  placeholder='Repita su contraseña'
                  secureTextEntry
                  style={styles.loginField}
                ></FormikInputValue>
              </View>
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
