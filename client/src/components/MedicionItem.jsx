import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MedicionItem = (props) => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.encabezado}>
        <Text style={styles.textEncabezado}>{props.tipo}</Text>
        <Text style={styles.textEncabezado}>
          {props.fechaRegistro.slice(0, 10)}
        </Text>
      </View>
      <View style={styles.contenido}>
        <Text style={styles.textBody}>{props.valorRegistrado1}</Text>
        <Text style={styles.textBody2Value}>{props.valorRegistrado2}</Text>
        <Text style={styles.textBody}>{props.unidadesValor}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: 'lightblue',
    display: 'flex',
    height: 80,
    justifyContent: 'space-around',
    borderRadius: 10,
    paddingHorizontal: 5
  },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contenido: {
    flexDirection: 'row'
  },
  textEncabezado: {
    fontSize: 20
  },
  textBody: {
    fontSize: 18
  },
  textBody2Value: {
    fontSize: 18,
    marginLeft: 10,
    marginRight: 7
  }
})

export default MedicionItem
