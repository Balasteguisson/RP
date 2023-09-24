import React, { useEffect, useState } from 'react'

import { View, StyleSheet, Text, Button, FlatList } from 'react-native'
import { AppBar } from '../components/AppBar'
import { useLocation, useNavigate } from 'react-router-native'
import queryString from 'query-string'
import AppFooter from '../components/AppFooter'
import usePatientIllnesses from '../hooks/usePatientIllnesses.js'

const IllnessPage = () => {
  const [codPaciente, setCodPaciente] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()
  const enfermedades = usePatientIllnesses(codPaciente)

  const searchParams = queryString.parse(location.search)
  useEffect(() => {
    setCodPaciente(searchParams.id)
  }, [searchParams.id])

  const handleTouchRegister = () => {
    navigate(`/registroPatologia?id=${codPaciente}`)
  }

  return (
    <View style={styles.page}>
      <AppBar codPaciente={codPaciente} />
      <View style={styles.container}>
        <View style={styles.listaContainer}>
          <FlatList
            data={enfermedades}
            ItemSeparatorComponent={() => <Text />}
            style={styles.list}
            renderItem={({ item: enfermedad }) => (
              <View style={styles.enfCard}>
                <Text style={styles.enfName}>{enfermedad.nombre}</Text>
                <View style={styles.dateContainer}>
                  <Text style={styles.enfDate}>
                    Inicio: {enfermedad.fechaDescubierto.slice(0, 10)} {'     '}{' '}
                    Código: {enfermedad.cod}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={handleTouchRegister} title='Registrar patología' />
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
    backgroundColor: 'lightgrey',
    height: '85%'
  },
  buttonContainer: {
    height: '7%',
    justifyContent: 'center'
  },
  list: {
    width: '100%',
    marginTop: 20,
    contentContainerStyle: 'center'
  },
  enfCard: {
    backgroundColor: 'lightblue',
    width: '100%',
    padding: 10,
    minHeight: '20%'
  },
  enfName: {
    fontWeight: '600',
    fontSize: 18
  },
  enfDate: {},
  dateContainer: {
    flexDirection: 'row'
  }
})

export default IllnessPage
