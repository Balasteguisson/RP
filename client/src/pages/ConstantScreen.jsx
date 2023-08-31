import { React, useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'

import { AppBar } from '../components/AppBar'
import AppFooter from '../components/AppFooter'
import { useLocation } from 'react-router-native'
import queryString from 'query-string'

import NewMedition from '../components/ConstantRegister'

const ConstantScreen = () => {
  const [codPaciente, setCodPaciente] = useState(null)
  const [tipo, setTipo] = useState(null)

  const location = useLocation()
  const searchParams = queryString.parse(location.search)
  useEffect(() => {
    setCodPaciente(searchParams.codPaciente)
    setTipo(searchParams.tipo)
  }, [searchParams.codPaciente, searchParams.tipo])

  return (
    <View style={styles.container}>
      <AppBar codPaciente={codPaciente} />
      <View style={styles.screenContent}>
        <View style={styles.meditionsContainer}>
          <Text>MEDICIONEs</Text>
        </View>
        <NewMedition tipo={tipo} codPaciente={codPaciente} />
      </View>
      <AppFooter />
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
  },
  meditionsContainer: {
    backgroundColor: 'red',
    height: '60%'
  },
  newMeditionContainer: {
    backgroundColor: 'blue',
    height: '40%'
  },
  fecMedicionBox: {}
})

export default ConstantScreen
