// Librerias
import { React, useState, useEffect } from 'react'
import { View, StyleSheet, Button, Alert } from 'react-native'
import { Formik } from 'formik'
import { useNavigate, useLocation } from 'react-router-native'
import queryString from 'query-string'
// Componentes
import StyledText from '../components/StyledText'
import FormikInputValue from '../components/FormikInputValue'

import DateTimePicker from '@react-native-community/datetimepicker'

import InputSelect from './SelectInput'

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
const sexOptions = [
  { label: 'Hombre', value: '1' },
  { label: 'Mujer', value: '2' }
]
const RegisterForm = () => {
  const navigate = useNavigate()
  const [date, setDate] = useState(new Date())
  const [sexo, setSexo] = useState(null)
  // const [mode, setMode] = useState('date')
  const [, setShow] = useState(false)
  const [userId, setUserId] = useState(null)
  const [email, setEmail] = useState(null)

  const location = useLocation()
  const searchParams = queryString.parse(location.search)
  useEffect(() => {
    setUserId(searchParams.userId)
    setEmail(searchParams.email)
  }, [searchParams.userId, searchParams.email])

  const fetchRegister = async (values) => {
    const url = 'http://192.168.100.250:8080/register'
    values.userId = userId
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response
  }

  const handleRegister = async (values) => {
    const response = await fetchRegister(values)
    const data = await response.json()
    if (response.status === 200) {
      Alert.alert('Usuario creado')
      navigate(`/landing?email=${email}&id=${data.codPaciente}`)
    } else {
      Alert.alert('Error al crear el usuario')
    }
  }
  return (
    <>
      <View style={styles.container}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            values.sexo = sexo
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
                />
                <FormikInputValue
                  name='apellidos'
                  placeholder='Apellidos'
                  style={styles.loginField}
                />
                <FormikInputValue
                  name='dni'
                  placeholder='DNI'
                  style={styles.loginField}
                />
                <FormikInputValue
                  name='numTarjSanitaria'
                  placeholder='Nº Tarjeta Sanitaria'
                  style={styles.loginField}
                />
                <View style={styles.fecNacBox}>
                  <StyledText>Fecha de Nacimiento</StyledText>
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
                </View>
                <View style={styles.sexField}>
                  <InputSelect
                    options={sexOptions}
                    name='sexo'
                    onValueChange={(val) => setSexo(val)}
                    placeholder='Seleccione su sexo'
                  />
                </View>
                <FormikInputValue
                  name='numTelf'
                  placeholder='Nº de Teléfono'
                  style={styles.loginField}
                />
                <FormikInputValue
                  name='pais'
                  placeholder='País'
                  style={styles.loginField}
                />
                <FormikInputValue
                  name='ccaa'
                  placeholder='CCAA'
                  style={styles.loginField}
                />
                <Button onPress={handleSubmit} title='Regístrate' />
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
  },
  fecNacBox: {
    width: '80%',
    alignItems: 'center'
  },
  sexField: {
    width: '80%',
    textAlign: 'center'
  }
})

export default RegisterForm
