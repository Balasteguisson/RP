import React from 'react'

import { View, StyleSheet, Text, Image } from 'react-native'
import Constants from 'expo-constants'
import { Link, useLocation } from 'react-router-native'

export const AppBar = () => {
  const location = useLocation()
  const titulo = () => {
    switch (location.pathname) {
      case '/signUp':
        return 'Nuevo usuario'
      case '/register':
        return 'Rellena tu información'
      case '/landing':
        return 'Menú principal'
      default:
        return null
    }
  }
  return (
    <View style={styles.appBar}>
      <Link to='/'>
        <Text style={styles.appBarText}>Cerrar sesión</Text>
      </Link>
      <Text style={styles.appBarText}>{titulo()}</Text>
      <Image
        source={require('../assets/icons/userIcon.png')}
        style={styles.userIcon}
      ></Image>
    </View>
  )
}

export const AppBarLogin = () => {
  return (
    <Image
      style={styles.loginImagen}
      source={require('../assets/images/Logotipo.png')}
    ></Image>
  )
}

const styles = StyleSheet.create({
  appBar: {
    width: '100%',
    height: Constants.statusBarHeight + 50,
    backgroundColor: '#1D2332',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  appBarText: {
    color: 'white'
  },
  loginImagen: {
    marginTop: -50,
    transform: [{ scale: 0.8 }],
    alignSelf: 'center'
  },
  userIcon: {
    width: 50,
    height: 50
  }
})
