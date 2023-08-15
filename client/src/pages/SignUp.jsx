import React from 'react'

import { View, StyleSheet } from 'react-native'
import { useNavigate } from 'react-router-native'
import SignUpForm from '../components/SignUpForm'
import { AppBar } from '../components/AppBar'

const SignUpScreen = () => {
  const navigate = useNavigate()
  const handleRegister = () => {
    navigate('/register')
  }
  return (
    <View style={styles.container}>
      <AppBar></AppBar>
      <SignUpForm></SignUpForm>
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

export default SignUpScreen
