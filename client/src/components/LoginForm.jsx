import React from 'react'

import { Formik } from 'formik'

import { View, StyleSheet, Button, Alert } from 'react-native'
import { useNavigate } from 'react-router-native'

import FormikInputValue from '../components/FormikInputValue'
import StyledText from '../components/StyledText.jsx'

const initialValues = {
  email: '',
  password: ''
}

const LoginForm = () => {
  const fetchUser = async (values) => {
    // const url = 'http://localhost:8080/login'
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
    if (response === undefined) {
      Alert.alert('Usuario o contraseña incorrectos')
    } else {
      navigate(`/landing?email=${values.email}&id=${response}`)
    }
  }

  const [isFocusedEmail, setIsFocusedEmail] = React.useState(false)
  const [isFocusedPassword, setIsFocusedPassword] = React.useState(false)

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
              <View style={styles.formsInputsContainer}>
                <FormikInputValue
                  name='email'
                  keyboardType='email-address'
                  autoCapitalize='none'
                  placeholder='Email'
                  style={[
                    styles.formcontainerElement,
                    isFocusedEmail ? styles.input_focus : styles.input
                  ]}
                  onFocus={() => setIsFocusedEmail(true)}
                  onBlur={() => setIsFocusedEmail(false)}
                />
                <FormikInputValue
                  name='password'
                  placeholder='Contraseña'
                  secureTextEntry
                  style={[
                    styles.formcontainerElement,
                    isFocusedPassword ? styles.input_focus : styles.input
                  ]}
                  onFocus={() => setIsFocusedPassword(true)}
                  onBlur={() => setIsFocusedPassword(false)}
                />
              </View>
              <View style={styles.formsInpuformsButtonsContainertsContainer}>
                <Button
                  style={styles.button}
                  onPress={handleSubmit}
                  title='Iniciar sesión'
                />
                <View>
                  <StyledText>¿No tienes cuenta?</StyledText>
                  <Button
                    onPress={handleSignUp}
                    title='Regístrate'
                    style={styles.buttonRegistrar}
                  />
                </View>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '90%',
    width: '80%',
    borderRadius: 20,
    marginBottom: '15%',
    padding: 4
  },
  formsInputsContainer: {
    marginTop: '20%',
    alignItems: 'center',
    width: '100%'
  },
  formsButtonsContainer: {
    alignItems: 'center',
    width: '100%'
  },
  formcontainerElement: {
    width: '70%'
  },
  input: {
    textAlign: 'center',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#1b2333'
  },
  input_focus: {
    textAlign: 'center',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 2,
    borderColor: '#32456b'
  },
  button: {
    backgroundColor: '#32456b',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%'
  },
  buttonRegistrar: {
    fontSize: 12
  }
})

export default LoginForm
