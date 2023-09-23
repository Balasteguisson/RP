import React, { useEffect, useState } from 'react'

import { View, StyleSheet, Text, FlatList, Button } from 'react-native'
import { AppBar } from '../components/AppBar'
import { useNavigate, useLocation } from 'react-router-native'
import queryString from 'query-string'
import AppFooter from '../components/AppFooter'
import usePatientTreatments from '../hooks/usePatientTreatments.js'

const TreatmentPage = () => {
  const [codPaciente, setCodPaciente] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()
  const tratamientos = usePatientTreatments(codPaciente)

  const searchParams = queryString.parse(location.search)
  useEffect(() => {
    setCodPaciente(searchParams.id)
  }, [searchParams.id])

  const handleTouchRegister = () => {
    navigate(`/registroTratamiento?id=${codPaciente}`)
  }
  return (
    <View style={styles.page}>
      <AppBar codPaciente={codPaciente} />
      <View style={styles.container}>
        <View style={styles.listaContainer}>
          <FlatList
            data={tratamientos}
            ItemSeparatorComponent={() => <Text />}
            style={styles.list}
            renderItem={({ item: tratamiento }) => (
              <View style={styles.medCard}>
                <Text style={styles.medName}>
                  {tratamiento.nombreMedicamento}
                </Text>
                <View style={styles.dateContainer}>
                  <Text style={styles.medDate}>
                    Inicio: {tratamiento.fechaInicio.slice(0, 10)} {'     '}{' '}
                    Fin: {tratamiento.fechaFin.slice(0, 10)}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={handleTouchRegister} title='Registrar medicamento' />
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
  medCard: {
    backgroundColor: 'lightblue',
    width: '100%',
    padding: 10,
    minHeight: '20%'
  },
  medName: {
    fontWeight: '600',
    fontSize: 18
  },
  medDate: {},
  dateContainer: {
    flexDirection: 'row'
  }
})

export default TreatmentPage
