import React from 'react'

import { View, StyleSheet } from 'react-native'
import LoginForm from '../components/LoginForm'
import { AppBarLogin } from '../components/AppBar'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <AppBarLogin />
      <LoginForm />
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
