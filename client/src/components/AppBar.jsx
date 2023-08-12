import React from 'react'

import { View, StyleSheet, Text } from 'react-native'
import Constants from 'expo-constants'

const AppBar = () => {
  return (
    <View style={styles.appBar}>
      <Text style={styles.appBarText}>Menú Principal</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  appBar: {
    width: '100%',
    height: Constants.statusBarHeight + 50,
    backgroundColor: '#1D2332',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop: Constants.statusBarHeight
  },
  appBarText: {
    color: 'white'
  }
})

export default AppBar
