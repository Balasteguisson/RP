import React, { useEffect, useState } from 'react'

import { View, Text, StyleSheet } from 'react-native'
import { useLocation } from 'react-router-native'
import { AppBar } from '../components/AppBar'
import AppFooter from '../components/AppFooter'
import queryString from 'query-string'
import ConstantList from '../components/ConstantList'

const LandingPage = () => {
  const [userId, setUserId] = React.useState(null)

  const location = useLocation()
  const searchParams = queryString.parse(location.search)
  useEffect(() => {
    setUserId(searchParams.id)
  }, [searchParams.id])

  return (
    <View style={styles.container}>
      <AppBar></AppBar>
      <ConstantList userId={userId}></ConstantList>
      <AppFooter></AppFooter>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'lightgrey'
  },
  screenContent: {
    flex: 1
  }
})
export default LandingPage
