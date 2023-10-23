import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const AddAddressScreen = () => {
  const { height } = Dimensions.get("window")
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
      <Pressable style={{ borderWidth: 1, position: 'absolute', bottom: 0, width: 300, justifyContent: 'center', alignItems: "center" }}>
        <Text>Hello</Text>
      </Pressable>
    </View>
  )
}

export default AddAddressScreen

const styles = StyleSheet.create({})