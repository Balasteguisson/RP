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
  const [selectedMedName, setSelectedMedName] = useState('Medicamento')
  const [selectedMedCod, setSelectedMedCod] = useState('')
  const [fechaInicio, setFechaInicio] = useState(new Date())
  const [fechaFin, setFechaFin] = useState(new Date())
  const [, setShow] = useState(false)
  const location = useLocation()

  const searchParams = queryString.parse(location.search)
  useEffect(() => {
    setCodPaciente(searchParams.id)
  }, [searchParams.id])

  const [isFocusedBuscador, setIsFocusedBuscador] = useState(false)

  const handleSearch = async () => {
    const url = `https://cima.aemps.es/cima/rest/medicamentos?nombre=${searchText}`

    try {
      const response = await fetch(url)
      const resp = await response.json()
      let resultados = resp.resultados.slice(0, 15)
      resultados = resultados.map((result) => {
        return { name: result.nombre, cod: result.nregistro }
      })
      setSearchResults(resultados)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSelect = (item) => {
    console.log('Seleccionado' + item.name)
    setSelectedMedName(item.name)
    setSelectedMedCod(item.cod)
  }

  const handleGuardar = async () => {
    if (selectedMedCod === '') {
      Alert.alert('Debe seleccionar un medicamento')
      return
    }
    const datos = {
      nombre: selectedMedName,
      cod: selectedMedCod,
      fechaInicio,
      fechaFin,
      codPaciente
    }
    const url = 'http://192.168.100.250:8080/registrarTratamiento'
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(response)
  }

  return (
    <View style={styles.container}>
      <AppBar codPaciente={codPaciente} />
      <View style={styles.content}>
        <View style={styles.searchBar}>
          <TextInput
            placeholder='Buscar medicamento'
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
                style={styles.medicamentoCardContainer}
                onPress={() => {
                  handleSelect(item)
                }}
              >
                <Text style={styles.medicamentoCardTitulo}>{item.name}</Text>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <Text />}
          />
        </View>
        <View style={styles.datosTratamiento}>
          <Text style={styles.nombreMedicamento}>{selectedMedName}</Text>
          <View style={styles.fechasRow}>
            <DateTimePicker
              name='fechaInicio'
              value={fechaInicio}
              mode='date'
              label='Inicio toma medicamento'
              onChange={(event, selDate) => {
                setShow(false)
                setFechaInicio(selDate)
              }}
            />
            <DateTimePicker
              name='fechaFin'
              value={fechaFin}
              mode='date'
              label='Fin toma medicamento'
              onChange={(event, selDate) => {
                setShow(false)
                setFechaFin(selDate)
              }}
            />
          </View>
          <Button title='Guardar tratamiento' onPress={handleGuardar} />
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
    height: '65%',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15
  },
  datosTratamiento: {
    height: '21%',
    width: '100%',
    justifyContent: 'space-around',
    paddingTop: 15,
    paddingBottom: 15
  },
  medicamentoCardContainer: {
    backgroundColor: 'lightblue',
    width: '100%',
    padding: 10
  },
  medicamentoCardTitulo: {
    width: '100%',
    alignItems: 'center',
    textAlign: 'justify'
  },
  fechasRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 0
  },
  nombreMedicamento: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 500,
    borderBottomWidth: 5,
    borderBottomColor: 'black'
  }
})

export default RegisterTreatmentScreen
