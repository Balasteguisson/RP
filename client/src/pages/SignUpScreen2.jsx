//Librerias
import React from 'react'
import { View, StyleSheet } from 'react-native'

//Componentes
import { AppBar } from '../components/AppBar'
import RegisterForm from '../components/RegisterForm'

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <AppBar></AppBar>
      <RegisterForm></RegisterForm>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: 'lightgrey'
  }
})

export default RegisterScreen
