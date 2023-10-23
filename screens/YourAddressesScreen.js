import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const YourAddressesScreen = () => {
  const insets = useSafeAreaInsets()
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: "white"
      }}
    >
      <Text>YourAddressesScreen</Text>
    </View>
  )
}

export default YourAddressesScreen

const styles = StyleSheet.create({})