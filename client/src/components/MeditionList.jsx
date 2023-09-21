import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'

import usePatientMediciones from '../hooks/usePatientMediciones.js'
import MedicionItem from './MedicionItem.jsx'

const MeditionList = (props) => {
  const mediciones = usePatientMediciones(props.codPaciente, props.tipo)
  return (
    <FlatList
      data={mediciones}
      style={styles.list}
      ItemSeparatorComponent={() => <Text />}
      renderItem={({ item: cons }) => <MedicionItem {...cons} />}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
    marginTop: 20,
    contentContainerStyle: 'center'
  }
})

export default MeditionList
