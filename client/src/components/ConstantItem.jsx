import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ConstantItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <Text>{props.id}</Text>
      <Text>{props.date}</Text>
      <Text>
        {props.value[0]} {props.value[1]} {props.unit}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    width: '100%'
  }
})

export default ConstantItem
