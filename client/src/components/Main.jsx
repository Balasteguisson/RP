import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Route, Routes } from 'react-router-native'

// Screen Imports
/*
import { AppBar } from './AppBar'
import AppFooter from './AppFooter'
import LoginForm from './LoginForm'
import ConstantList from './ConstantList'
*/
import SignUpScreen from '../pages/SignUp'
import RegisterScreen from '../pages/SignUpScreen2'
import LoginScreen from '../pages/LoginScreen'
import LandingPage from '../pages/LandingPage'
import ConstantScreen from '../pages/ConstantScreen'
import TreatmentPage from '../pages/TreatmentPage'
import IllnessPage from '../pages/IllnessPage'

const Main = () => {
  return (
    <View style={styles.container}>
      <Routes>
        <Route path='/' Component={LoginScreen} exact />
        <Route path='/signUp' Component={SignUpScreen} exact />
        <Route path='/register' Component={RegisterScreen} exact />
        <Route path='/landing' Component={LandingPage} exact />
        <Route path='/constantScreen' Component={ConstantScreen} exact />
        <Route path='/tratamientos' Component={TreatmentPage} exact />
        <Route path='/enfermedades' Component={IllnessPage} exact />
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
