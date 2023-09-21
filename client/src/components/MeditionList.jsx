import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'

import usePatientMediciones from '../hooks/usePatientMediciones.js'
import MedicionItem from './MedicionItem.jsx'

const MeditionList = (props) => {
  const mediciones = usePatientMediciones(props.codPaciente, props.tipo)
  if (mediciones.length === 0) {
    return <Text style={styles.emptyText}>No hay mediciones registradas</Text>
  }
  return (
    <FlatList
      data={mediciones}
      style={styles.list}
      ItemSeparatorComponent={() => <Text />}
      renderItem={({ item: cons }) => (
        <MedicionItem tipo={props.tipo} {...cons} />
      )}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
    marginTop: 20,
    contentContainerStyle: 'center'
  },
  emptyText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    height: '60%'
  }
})

export default MeditionList
