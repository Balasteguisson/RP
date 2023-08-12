import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ConstantItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <Text style={styles.constTitle}>{props.id}</Text>
      <Text style={styles.consDate}>{props.date}</Text>
      <Text>
        {props.value[0]} {props.value[1]} {props.unit}
      </Text>
      <Text>Más</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    width: '100%'
  },
  constTitle: {
    fontWeight: '600',
    fontSize: 20
  },
  consDate: {}
})

export default ConstantItem
