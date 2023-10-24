import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

export const CheckLoginStatus = () => {
    const navigation = useNavigation()

    const check = async () => {
        try {
            const token = await AsyncStorage.getItem('auth')
            if (!token) {
                navigation.replace('Login')
            }
        } catch (error) {
            console.log(error)
        }
    }
    check()

  return (
   <></>
  )
}

export default CheckLoginStatus

const styles = StyleSheet.create({})