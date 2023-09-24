import { React, useState } from 'react'
import { View, StyleSheet, Button, Alert } from 'react-native'

import StyledText from '../components/StyledText'

import { Formik } from 'formik'
import FormikInputValue from '../components/FormikInputValue'
import DateTimePicker from '@react-native-community/datetimepicker'

const initialValues = {
  valor1: '',
  valor2: '',
  fecMedicion: '',
  tipo: ''
}

const NewMedition = ({ tipo, codPaciente, onNewMedition }) => {
  const [, setShow] = useState(false)
  const [date, setDate] = useState(new Date())

  const [isFocusedValor1, setIsFocusedValor1] = useState(false)
  const [isFocusedValor2, setIsFocusedValor2] = useState(false)

  const handleCreateConstant = async (values) => {
    const adjustedDate = new Date(date)
    adjustedDate.setHours(adjustedDate.getHours() + 2)
    const fechaBBDD = `${adjustedDate.getFullYear()}-${
      adjustedDate.getMonth() + 1
    }-${adjustedDate.getDate()} ${adjustedDate.getHours()}:${adjustedDate.getMinutes()}`

    values.tipo = tipo
    values.fecMedicion = fechaBBDD
    values.codPaciente = codPaciente
    if (values.valor2 === '') {
      values.valor2 = null
    }
    const response = await fetchCreateConstant(values)

    if (response.status === 200) {
      onNewMedition()
      Alert.alert('Constante creada correctamente')
    } else {
      Alert.alert('Error al registrar la constante')
    }
  }

  const fetchCreateConstant = async (values) => {
    const url = 'http://192.168.100.250:8080/registrarMedicionCV'
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response
  }

  return (
    <View style={styles.newMeditionContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          handleCreateConstant(values)
        }}
      >
        {({ handleSubmit }) => {
          return (
            <View style={styles.container}>
              <FormikInputValue
                name='valor1'
                placeholder='Valor 1'
                style={[
                  styles.formcontainerElement,
                  isFocusedValor1 ? styles.input_focus : styles.input
                ]}
                onFocus={() => setIsFocusedValor1(true)}
                onBlur={() => setIsFocusedValor1(false)}
              />
              <FormikInputValue
                name='valor2'
                placeholder='Valor 2'
                style={[
                  styles.formcontainerElement,
                  isFocusedValor2 ? styles.input_focus : styles.input
                ]}
                onFocus={() => setIsFocusedValor2(true)}
                onBlur={() => setIsFocusedValor2(false)}
              />
              <View style={styles.fecMedicionBox}>
                <StyledText>Fecha de Medida</StyledText>
                <DateTimePicker
                  name='fecMedicion'
                  value={date}
                  mode='datetime'
                  label='Fecha de Medición'
                  style={styles.fechaMedicion}
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
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  screenContent: {
    flex: 1
  },
  meditionsContainer: {
    backgroundColor: 'red',
    height: '60%'
  },
  newMeditionContainer: {
    height: '40%'
  },
  input: {
    textAlign: 'center',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#1b2333'
  },
  input_focus: {
    textAlign: 'center',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 2,
    borderColor: '#32456b'
  },
  fecMedicionBox: {
    alignItems: 'center'
  },
  fechaMedicion: {
    marginTop: 15,
    marginBottom: 10
  }
})
export default NewMedition
