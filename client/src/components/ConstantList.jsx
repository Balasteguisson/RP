import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

import constants from '../exampleData/constants.js'
import ConstantItem from './ConstantItem.jsx'

const ConstantList = () => {
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
