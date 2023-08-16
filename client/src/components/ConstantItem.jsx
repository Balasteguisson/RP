import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'

const ConstantItem = (props) => {
  const onPress = () => {
    Alert.alert('Toque')
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <View key={props.id} style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.constTitle}>{props.id}</Text>
          <Text style={styles.consDate}>{props.date}</Text>
        </View>
        <Text style={styles.valueText}>
          {props.value[0]} {props.value[1]} {props.unit}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    width: '100%',
    padding: 10,
    minHeight: '20%'
  },
  header: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  constTitle: {
    fontWeight: '600',
    fontSize: 20
  },
  consDate: {
    alignSelf: 'flex-end'
  },
  valueText: {
    fontSize: 25
  }
})

export default ConstantItem
