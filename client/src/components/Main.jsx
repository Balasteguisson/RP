import { React } from 'react'
import { View, StyleSheet } from 'react-native'

import LoginForm from './Login.jsx'
import ConstantList from './ConstantList.jsx'
import AppBar from './AppBar.jsx'
import AppFooter from './AppFooter.jsx'
import { Switch, Route, Redirect } from 'react-router-native'

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <LoginForm />
      <AppFooter />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E6E6'
  }
})

export default Main
