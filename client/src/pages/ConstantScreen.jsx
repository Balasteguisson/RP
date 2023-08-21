import { React, useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'

import StyledText from '../components/StyledText'
import { AppBar } from '../components/AppBar'
import AppFooter from '../components/AppFooter'
import { useLocation } from 'react-router-native'
import { useNavigate } from 'react-router-native'
import queryString from 'query-string'
import { Form, Formik } from 'formik'
import FormikInputValue from '../components/FormikInputValue'
import DateTimePicker from '@react-native-community/datetimepicker'

const initialValues = {
  valor1: '',
  valor2: '',
  fecMedicion: '',
  tipo: ''
}

const ConstantScreen = () => {
  const [codPaciente, setCodPaciente] = useState(null)
  const [show, setShow] = useState(false)
  const [tipo, setTipo] = useState(null)
  const [date, setDate] = useState(new Date())

  const location = useLocation()
  const searchParams = queryString.parse(location.search)
  useEffect(() => {
    setCodPaciente(searchParams.codPaciente)
    setTipo(searchParams.tipo)
  }, [searchParams.codPaciente])

  const handleCreateConstant = async (values) => {
    const adjustedDate = new Date(date)
    adjustedDate.setHours(adjustedDate.getHours() + 2)
    values.tipo = tipo
    values.fecMedicion = adjustedDate
    console.log(values)
  }

  const fetchCreateConstant = async (values) => {
    const url = 'http://registrarMedicionCV'
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <View style={styles.container}>
      <AppBar codPaciente={codPaciente}></AppBar>
      <View style={styles.screenContent}>
        <View style={styles.meditionsContainer}>
          <Text>MEDICIONEs</Text>
        </View>
        <View style={styles.newMeditionContainer}>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              handleCreateConstant(values)
            }}
          >
            {({ handleSubmit }) => {
              return (
                <View>
                  <FormikInputValue name='valor1' placeholder='Valor 1' />
                  <FormikInputValue name='valor2' placeholder='Valor 2' />
                  <View style={styles.fecMedicionBox}>
                    <StyledText>Fecha de Medida</StyledText>
                    <DateTimePicker
                      name='fecMedicion'
                      value={date}
                      mode='datetime'
                      label='Fecha de Medición'
                      onChange={(event, selDate) => {
                        setShow(false)
                        setDate(selDate)
                      }}
                    />
                  </View>
                  <Button title='Crear Constante' onPress={handleSubmit} />
                </View>
              )
            }}
          </Formik>
        </View>
      </View>
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
