import React from 'react'

import { View, StyleSheet, Text } from 'react-native'
import Constants from 'expo-constants'
import { Link } from 'react-router-native'

const AppBarTab = ({ active, children, to }) => {
  return (
    <Link to={to}>
      <Text>{children}</Text>
    </Link>
  )
}

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
    paddingTop: Constants.statusBarHeight,
    alignSelf: 'flex-start'
  },
  appBarText: {
    color: 'white'
  }
})

export default AppBar
