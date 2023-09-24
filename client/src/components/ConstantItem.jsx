import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigate } from 'react-router-native'

const ConstantItem = (props) => {
  const navigate = useNavigate()
  const onPress = () => {
    navigate(
      `/constantScreen?codPaciente=${props.codPaciente}&tipo=${props.tipo}`
    )
  }
  const fecha = props.fechaMedida.slice(0, 10)
  return (
    <TouchableOpacity onPress={onPress}>
      <View key={props.tipo} style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.constTitle}>{props.tipo}</Text>
          <Text style={styles.consDate}>{props.fechaMedida ? fecha : ''}</Text>
        </View>
        <Text style={styles.valueText}>
          {props.valorMedida} {props.valorMedida2} {props.unidades}
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
