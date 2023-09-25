import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { AppBar } from '../components/AppBar'
import { useLocation } from 'react-router-native'
import queryString from 'query-string'
import AppFooter from '../components/AppFooter'
import QRCode from 'react-native-qrcode-svg'

const ShowData = () => {
  const [codPaciente, setCodPaciente] = useState(null)
  const [link, setLink] = useState(null)
  const location = useLocation()

  const searchParams = queryString.parse(location.search)
  useEffect(() => {
    setCodPaciente(searchParams.id)
    setLink('http://192.168.100.250:8080/doctor')
  }, [searchParams.id])
  return (
    <View style={styles.page}>
      <AppBar codPaciente={codPaciente} />
      <View style={styles.container}>
        <View style={styles.qrContainer}>
          <QRCode value={link} size={300} />
        </View>
        <Text style={styles.pie}>
          Muestra este QR a tu médico para que pueda ver un resumen de tu
          historia
        </Text>
      </View>
      <AppFooter />
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue'
  },
  qrContainer: {
    backgroundColor: 'white',
    marginBottom: '10%'
  },
  pie: {
    fontSize: 20,
    textAlign: 'center'
  }
})

export default ShowData
