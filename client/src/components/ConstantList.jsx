import React from 'react'
import { Text, FlatList, StyleSheet } from 'react-native'

import ConstantItem from './ConstantItem.jsx'
import usePatientConstants from '../hooks/usePatientConstants.js'

const ConstantList = ({ userId }) => {
  const constants = usePatientConstants(userId)
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
