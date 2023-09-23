import React, { useEffect, useState } from 'react'

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { AppBar } from '../components/AppBar'
import { useNavigate, useLocation } from 'react-router-native'
import queryString from 'query-string'
import AppFooter from '../components/AppFooter'

const TreatmentPage = () => {
  const [codPaciente, setCodPaciente] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  const searchParams = queryString.parse(location.search)
  useEffect(() => {
    setCodPaciente(searchParams.id)
  }, [searchParams.id])

  const handleTouchRegister = () => {
    console.log('Registrar')
    navigate(`/registroTratamiento?id=${codPaciente}`)
  }
  return (
    <View style={styles.page}>
      <AppBar codPaciente={codPaciente} />
      <View style={styles.container}>
        <View style={styles.listaContainer}>
          <Text>Tratamientos registrados</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.botonRegistro}
            onPress={handleTouchRegister}
          >
            <Text>Registrar medicamento</Text>
          </TouchableOpacity>
        </View>
      </View>
      <AppFooter codPaciente={codPaciente} />
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    flex: 1
  },
  container: {
    flexGrow: 1,
    flex: 1,
    width: '100%'
  },
  listaContainer: {
    backgroundColor: 'aqua',
    height: '85%'
  },
  botonRegistro: {
    alignSelf: 'center',
    backgroundColor: 'green',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  buttonContainer: {
    height: '7%',
    justifyContent: 'center'
  }
})

export default TreatmentPage
