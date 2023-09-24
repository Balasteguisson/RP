import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native'
import queryString from 'query-string'
import { AppBar } from '../components/AppBar'
import AppFooter from '../components/AppFooter'
import { useLocation } from 'react-router-native'
import DateTimePicker from '@react-native-community/datetimepicker'

const RegisterTreatmentScreen = () => {
  const [codPaciente, setCodPaciente] = useState(null)
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState()
  const [selectedIllnessName, setSelectedIllnessName] = useState('Patología')
  const [selectedIllnessCIE, setSelectedIllnessCIE] = useState('')
  const [fechaInicio, setFechaInicio] = useState(new Date())
  // const [fechaFin, setFechaFin] = useState(new Date())
  const [, setShow] = useState(false)
  const location = useLocation()
  const [isFocusedBuscador, setIsFocusedBuscador] = useState(false)

  const searchParams = queryString.parse(location.search)
  useEffect(() => {
    setCodPaciente(searchParams.id)
  }, [searchParams.id])

  const handleSearch = async () => {
    const url = `http://192.168.100.250:8080/findPatologia?nombre=${searchText}`
    try {
      const response = await fetch(url)
      const resp = await response.json()
      console.log(resp)
      setSearchResults(resp)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSelect = (item) => {
    setSelectedIllnessName(item.nombre)
    setSelectedIllnessCIE(item.cod)
  }

  const handleGuardar = async () => {
    if (selectedIllnessName === '') {
      Alert.alert('Debe seleccionar un medicamento')
      return
    }
    const datos = {
      nombre: selectedIllnessName,
      cod: selectedIllnessCIE,
      fechaInicio,
      // fechaFin,
      codPaciente
    }
    console.log(datos)
    const url = 'http://192.168.100.250:8080/postPatologia'
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response.status === 200) {
      Alert.alert('Patología registrado correctamente')
    } else {
      Alert.alert('Error al registrar patología')
    }
  }

  return (
    <View style={styles.container}>
      <AppBar codPaciente={codPaciente} />
      <View style={styles.content}>
        <View style={styles.searchBar}>
          <TextInput
            placeholder='Buscar patología'
            autoCorrect={false}
            style={[
              styles.buscador,
              isFocusedBuscador ? styles.input_focus : styles.input
            ]}
            onFocus={() => setIsFocusedBuscador(true)}
            onBlur={() => setIsFocusedBuscador(false)}
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleSearch}
          />
          <Button title='Buscar' onPress={handleSearch} />
        </View>
        <View style={styles.searchRes}>
          <FlatList
            data={searchResults}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.enfermedadCardContainer}
                onPress={() => {
                  handleSelect(item)
                }}
              >
                <Text style={styles.enfermedadCardTitulo}>{item.nombre}</Text>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <Text />}
          />
        </View>

        <View style={styles.datosEnfermedad}>
          <Text style={styles.nombreEnfermedad}>{selectedIllnessName}</Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-around' }}
          >
            <Text style={{ color: '#444444' }}>Fecha en la que se detectó</Text>
            {/* <Text style={{ color: '#444444' }}>Fecha Fin</Text> */}
          </View>
          <View style={styles.fechasRow}>
            <DateTimePicker
              name='fechaInicio'
              value={fechaInicio}
              mode='date'
              label='Inicio enfermedad'
              onChange={(event, selDate) => {
                setShow(false)
                setFechaInicio(selDate)
              }}
            />
            {/*
            <DateTimePicker
              name='fechaFin'
              value={fechaFin}
              mode='date'
              label='Fin enfermedad'
              onChange={(event, selDate) => {
                setShow(false)
                setFechaFin(selDate)
              }}
            />
            */}
          </View>
          <Button title='Guardar patología' onPress={handleGuardar} />
        </View>
      </View>
      <AppFooter codPaciente={codPaciente} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flex: 1
  },
  content: {
    flex: 1,
    alignItems: 'center'
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
  buscador: {
    textAlign: 'center',
    width: '80%'
  },
  searchBar: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 10,
    marginBottom: 10,
    paddingLeft: 15,
    paddingRight: 15
  },
  searchRes: {
    height: '55%',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15
  },
  datosEnfermedad: {
    height: '30%',
    width: '100%',
    justifyContent: 'space-around',
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 15
  },
  enfermedadCardContainer: {
    backgroundColor: 'lightblue',
    width: '100%',
    padding: 10,
    borderRadius: 10
  },
  enfermedadCardTitulo: {
    width: '100%',
    alignItems: 'center',
    textAlign: 'justify'
  },
  fechasRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 0
  },
  nombreEnfermedad: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 500,
    borderBottomWidth: 5,
    borderBottomColor: 'black',
    height: '30%'
    // backgroundColor: '#E5E4E2'
  }
})

export default RegisterTreatmentScreen
