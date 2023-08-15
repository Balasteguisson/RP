import React from 'react'

import { View, Text, StyleSheet } from 'react-native'
import LoginForm from '../components/LoginForm'
import { AppBarLogin } from '../components/AppBar'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <AppBarLogin></AppBarLogin>
      <LoginForm></LoginForm>
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

export default LoginScreen
