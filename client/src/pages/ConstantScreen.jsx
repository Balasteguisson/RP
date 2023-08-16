import React from 'react'
import { View, Text } from 'react-native'

import StyledText from '../components/StyledText'
import { AppBar } from '../components/AppBar'
import AppFooter from '../components/AppFooter'

const ConstantScreen = () => {
  return (
    <View>
      <AppBar />

      <AppFooter></AppFooter>
    </View>
  )
}
