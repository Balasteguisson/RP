import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

import ConstantItem from './ConstantItem.jsx'

const ConstantList = ({ userId }) => {
  const [constants, setConstants] = useState([])

  const fetchConstants = async (userId) => {
    const url = 'http://localhost:8080/constantes'
  }
  console.log('desde lista', userId)
  return (
    <FlatList
      data={constants}
      style={styles.list}
      ItemSeparatorComponent={() => <Text />}
      renderItem={({ item: cons }) => <ConstantItem {...cons} />}
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

export default ConstantList
