import React from 'react'

import { Formik } from 'formik'

import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Link } from 'react-router-native'

const initialValues = {
  email: '',
  password: ''
}
const LoginForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View style={styles.container}>
            <TextInput
              placeholder='Usuario'
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <TextInput
              placeholder='Contraseña'
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <Link to={'/landing'}>
              <Button title='Iniciar Sesión' onPress={handleSubmit} />
            </Link>
            <Link to={'/landing'}>
              <Text>HOLA- a lista</Text>
            </Link>
          </View>
        )
      }}
    </Formik>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default LoginForm
