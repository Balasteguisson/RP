import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'

const MedicionItem = (props) => {
  console.log('HOLAMI', props)
  return (
    <View>
      <View>
        <Text>{props.tipo}</Text>
        <Text>{props.fechaRegistro}</Text>
      </View>
      <View>
        <Text>{props.valorRegistrado1}</Text>
        <Text>{props.valorRegistrado2}</Text>
        <Text>{props.unidadesValor}</Text>
      </View>
    </View>
  )
}

export default MedicionItem
