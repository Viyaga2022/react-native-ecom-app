import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CartAndBuyButton = () => {
  return (
    <View style={{marginTop:45}}>
    <Pressable style={{alignItems:"center", justifyContent:"center", backgroundColor:"#009688", padding:15, margin:10, borderRadius:15, flex:1}}>
      <Text style={{color:"white",fontSize:18, fontWeight:500}}>ADD TO CART</Text>
    </Pressable>
  </View>
  )
}

export default CartAndBuyButton

const styles = StyleSheet.create({})
