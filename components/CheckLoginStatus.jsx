import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { myAccount } from './commonFunctions'

export const CheckLoginStatus = () => {
  const navigation = useNavigation()

  const check = async () => {
    const userId = await myAccount(navigation)
    console.log({userId})
  }

  check()

  return (
    <></>
  )
}

export default CheckLoginStatus

const styles = StyleSheet.create({})