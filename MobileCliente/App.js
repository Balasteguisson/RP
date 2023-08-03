import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
    </View >
  )
}

const styles = StyleSheet.create(
  {
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 30, alignSelf: 'center' },
  }
)

export default App;