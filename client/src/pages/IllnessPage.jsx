import React, { useEffect, useState } from 'react'

import { View, StyleSheet, Text } from 'react-native'
import { AppBar } from '../components/AppBar'
import { useLocation } from 'react-router-native'
import queryString from 'query-string'
import AppFooter from '../components/AppFooter'

const IllnessPage = () => {
  const [codPaciente, setCodPaciente] = useState(null)
  const location = useLocation()
  const searchParams = queryString.parse(location.search)
  useEffect(() => {
    setCodPaciente(searchParams.id)
  }, [searchParams.id])
  return (
    <View style={styles.page}>
      <AppBar codPaciente={codPaciente} />
      <View style={styles.container}>
        <Text>Registrar patología</Text>
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
    width: '100%'
  }
})

export default IllnessPage
