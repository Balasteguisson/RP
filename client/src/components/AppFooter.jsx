import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'

// generar un pie de aplicacion con 3 botones de navegacion
const AppFooter = (props) => {
  return (
    <View style={styles.footer}>
      <Link to={`/tratamientos?id=${props.codPaciente}`}>
        <Text style={styles.footerText}>Tratamientos</Text>
      </Link>
      <Link to={`/landing?id=${props.codPaciente}`}>
        <Text style={styles.footerText}>Constantes</Text>
      </Link>
      <Link to={`/enfermedades?id=${props.codPaciente}`}>
        <Text style={styles.footerText}>Patologías</Text>
      </Link>
    </View>
  )
}

// genera la hoja de estilos con un estilo minimalista
const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 60,
    backgroundColor: '#1D2332',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row'
  },
  footerText: {
    color: 'white'
  }
})

export default AppFooter
