import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import { Switch, Route, Redirect, Routes } from 'react-router-native'

//Screen Imports
import { AppBar } from './AppBar'
import AppFooter from './AppFooter'
import LoginForm from './LoginForm'
import ConstantList from './ConstantList'
import SignUpScreen from '../pages/SignUp'
import RegisterScreen from '../pages/SignUpScreen2'
import LoginScreen from '../pages/LoginScreen'
import LandingPage from '../pages/LandingPage'

const Main = () => {
  return (
    <View style={styles.container}>
      <Routes>
        <Route path='/' Component={LoginScreen} exact></Route>
        <Route path='/signUp' Component={SignUpScreen} exact></Route>
        <Route path='/register' Component={RegisterScreen} exact></Route>
        <Route path='/landing' Component={LandingPage} exact></Route>
      </Routes>
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

export default Main
