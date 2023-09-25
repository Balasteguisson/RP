import React from 'react'

import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'
import { Link, useLocation, useNavigate } from 'react-router-native'

export const AppBar = (props) => {
  const location = useLocation()
  const navigate = useNavigate()
  const titulo = () => {
    switch (location.pathname) {
      case '/signUp':
        return 'Nuevo usuario'
      case '/register':
        return 'Rellena tu información'
      case '/landing':
        return 'Constantes vitales'
      case '/constantScreen':
        return 'Registre su medición'
      case '/enfermedades':
        return 'Patologías'
      case '/tratamientos':
        return 'Tratamientos'
      case '/registroTratamiento':
        return 'Registrar tratamiento'
      case '/registroEnfermedad':
        return 'Registrar enfermedad'
      case '/registroPatologia':
        return 'Registrar patología'
      case '/showData':
        return 'Mostrar resumen HC'
      default:
        return null
    }
  }
  const backButton = () => {
    switch (location.pathname) {
      case '/register':
        return ['Atrás', '/signUp']
      case '/constantScreen':
        return ['Atrás', `/landing?id=${props.codPaciente}`]
      case '/registroTratamiento':
        return ['Atrás', `/tratamientos?id=${props.codPaciente}`]
      case '/registroPatologia':
        return ['Atrás', `/enfermedades?id=${props.codPaciente}`]
      case '/showData':
        return ['Atrás', `/landing?id=${props.codPaciente}`]
      default:
        return ['Cerrar sesión', '/']
    }
  }

  const handleShowData = () => {
    navigate(`/showData?id=${props.codPaciente}`)
  }
  return (
    <View style={styles.appBar}>
      <Link to={`${backButton()[1]}`}>
        <Text style={styles.appBarText}>{backButton()[0]}</Text>
      </Link>
      <Text style={styles.appBarText}>{titulo()}</Text>
      <TouchableOpacity onPress={handleShowData}>
        <Image
          source={require('../assets/icons/userIcon.png')}
          style={styles.userIcon}
        />
      </TouchableOpacity>
    </View>
  )
}

export const AppBarLogin = () => {
  return (
    <Image
      style={styles.loginImagen}
      source={require('../assets/images/Logotipo.png')}
    />
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
