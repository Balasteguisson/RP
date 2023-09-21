import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'

const MedicionItem = (props) => {
  return (
    <View>
      <View>
        <Text>{props.tipo}</Text>
        <Text>{props.fecha}</Text>
      </View>
      <View>
        <Text>{props.valor1}</Text>
        <Text>{props.valor2}</Text>
        <Text>{props.unidades}</Text>
      </View>
    </View>
  )
}

export default MedicionItem
