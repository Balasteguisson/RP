import { React } from 'react'
import Constants from 'expo-constants'
import { Text, View, StyleSheet } from 'react-native'

import LoginForm from './Login'

const Main = () => {
  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 5,
    flexGrow: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E6E6'
  }
})
export default Main
