import { React, useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import StyledText from '../components/StyledText'
import { AppBar } from '../components/AppBar'
import AppFooter from '../components/AppFooter'
import { useLocation } from 'react-router-native'
import { useNavigate } from 'react-router-native'
import queryString from 'query-string'

const ConstantScreen = () => {
  const [codPaciente, setCodPaciente] = useState(null)

  const location = useLocation()
  const searchParams = queryString.parse(location.search)
  useEffect(() => {
    setCodPaciente(searchParams.codPaciente)
  }, [searchParams.codPaciente])

  return (
    <View style={styles.container}>
      <AppBar codPaciente={codPaciente}></AppBar>
      <AppFooter></AppFooter>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'lightgrey'
  },
  screenContent: {
    flex: 1
  }
})

export default ConstantScreen
