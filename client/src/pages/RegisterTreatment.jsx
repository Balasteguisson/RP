import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import queryString from 'query-string'
import { AppBar } from '../components/AppBar'
import AppFooter from '../components/AppFooter'
import { useLocation } from 'react-router-native'

const RegisterTreatmentScreen = () => {
  const [codPaciente, setCodPaciente] = useState(null)
  const location = useLocation()

  const searchParams = queryString.parse(location.search)
  useEffect(() => {
    setCodPaciente(searchParams.id)
  }, [searchParams.id])
  return (
    <View style={styles.container}>
      <AppBar codPaciente={codPaciente} />
      <View style={styles.content} />
      <AppFooter codPaciente={codPaciente} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flex: 1
  }
})

export default RegisterTreatmentScreen
