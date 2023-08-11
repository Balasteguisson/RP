import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'

const LoginForm = () => {
  // const [text, onChangeText] = React.useState()
  return (
    <View style={loginStyles.loginBox}>
      <Text style={loginStyles.appTittle}>Registro Personal de Salud</Text>
      <View style={loginStyles.inputs}>
        <TextInput placeholder='Usuario' style={loginStyles.input} />
        <TextInput placeholder='Contraseña' style={loginStyles.input} />
      </View>
      <View style={loginStyles.buttonContainer}>
        <Button
          title='Iniciar sesión'
          onPress={() => Alert.alert('Login en construccion')}
          backgroundColor='#1D2332'
          style={loginStyles.loginButton}
        />
        <Text>¿No tienes cuenta? Regístrate</Text>
      </View>
    </View>
  )
}

const loginStyles = StyleSheet.create({
  loginBox: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    height: '70%',
    marginTop: '40%',
    borderRadius: '20px',
    backgroundColor: '#FFF',
    flexDirection: 'column'
  },
  loginButton: {
    backgroundColor: '#1D2332'
  },
  appTittle: {
    justifyContent: 'center',
    marginTop: '10%',
    fontSize: 30,
    textAlign: 'center',
    height: '20%'
  },
  inputs: {
    marginTop: '1%',
    height: '50%',
    width: '70%',
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    marginTop: '20%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '80%',
    textAlign: 'center',
    fontSize: 20
  },
  buttonContainer: {
    marginTop: '10%',
    width: '50%',
    height: '30%',
    textAlign: 'center'
  }
})

export default LoginForm
