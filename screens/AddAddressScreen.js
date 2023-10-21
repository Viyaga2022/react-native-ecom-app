import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AddAddressScreen = () => {
  const { height } = Dimensions.get("window")
  return (
    <View style={{backgroundColor:"green", flex:1}}>
      <Pressable style={{borderWidth:1,position:'absolute',bottom:0, width:300, justifyContent:'center', alignItems:"center"}}>
          <Text>Hello</Text>
      </Pressable>
    </View>
  )
}

export default AddAddressScreen

const styles = StyleSheet.create({})