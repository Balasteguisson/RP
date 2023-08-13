import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import { Switch, Route, Redirect, Routes } from 'react-router-native'

//Screen Imports
import AppBar from './AppBar'
import AppFooter from './AppFooter'
import LoginForm from './Login'
import ConstantList from './ConstantList'

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' Component={LoginForm} exact></Route>
        <Route path='/landing' Component={ConstantList} exact></Route>
      </Routes>
      <AppFooter />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: 'lightgrey',
    justifyContent: 'space-between'
  }
})

export default Main
