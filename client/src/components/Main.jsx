import { React } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import LoginForm from './Login'
import ConstantList from './ConstantList'
import AppBar from './AppBar'
import AppFooter from './AppFooter'

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <ConstantList />
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
