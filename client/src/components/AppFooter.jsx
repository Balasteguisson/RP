import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

// generar un pie de aplicacion con 3 botones de navegacion
const AppFooter = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Menú Principal</Text>
    </View>
  )
}

// genera la hoja de estilos con un estilo minimalista
const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 50,
    backgroundColor: '#1D2332',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10
  },
  footerText: {
    color: 'white'
  }
})

export default AppFooter
