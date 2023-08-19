//Librerias
import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, Button, DatePicker } from 'react-native'
import { Formik, Field } from 'formik'
import { useNavigate } from 'react-router-native'
//Componentes
import StyledText from '../components/StyledText'
import FormikInputValue from '../components/FormikInputValue'
import { AppBar } from '../components/AppBar'
import DateTimePicker from '@react-native-community/datetimepicker'
import StyledDateInput from './StyledDateInput'

const initialValues = {
  nombre: '',
  apellidos: '',
  dni: '',
  numTarjSanitaria: '',
  fecNacimiento: '',
  sexo: '',
  numTelf: '',
  pais: '',
  ccaa: ''
}

const RegisterForm = () => {
  const navigate = useNavigate()
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)

  const handleRegister = (values) => {
    console.log(values)
    //navigate('/landing')
  }
  return (
    <>
      <View style={styles.container}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            values.fecNacimiento = date
            handleRegister(values)
          }}
        >
          {({ handleSubmit }) => {
            return (
              <View style={styles.formContainer}>
                <FormikInputValue
                  name='nombre'
                  placeholder='Nombre'
                  style={styles.loginField}
                ></FormikInputValue>
                <FormikInputValue
                  name='apellidos'
                  placeholder='Apellidos'
                  style={styles.loginField}
                ></FormikInputValue>
                <FormikInputValue
                  name='dni'
                  placeholder='DNI'
                  style={styles.loginField}
                ></FormikInputValue>
                <FormikInputValue
                  name='numTarjSanitaria'
                  placeholder='Nº Tarjeta Sanitaria'
                  style={styles.loginField}
                ></FormikInputValue>
                <DateTimePicker
                  name='fecNacimiento2'
                  value={date}
                  mode='date'
                  label='Fecha de Nacimiento'
                  onChange={(event, selDate) => {
                    setShow(false)
                    setDate(selDate)
                  }}
                />

                <FormikInputValue
                  name='sexo'
                  placeholder='Sexo'
                  style={styles.loginField}
                ></FormikInputValue>
                <FormikInputValue
                  name='numTelf'
                  placeholder='Nº de Teléfono'
                  style={styles.loginField}
                ></FormikInputValue>
                <FormikInputValue
                  name='pais'
                  placeholder='País'
                  style={styles.loginField}
                ></FormikInputValue>
                <FormikInputValue
                  name='ccaa'
                  placeholder='CCAA'
                  style={styles.loginField}
                ></FormikInputValue>
                <Button onPress={handleSubmit} title='Regístrate'></Button>
              </View>
            )
          }}
        </Formik>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '90%',
    width: '80%',
    borderRadius: 20
  },
  loginField: {
    width: '80%',
    textAlign: 'center'
  }
})

export default RegisterForm
