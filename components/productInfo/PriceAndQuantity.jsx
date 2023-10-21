import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

const PriceAndQuantity = ({ price, oldPrice }) => {
  return (
    <View style={{ paddingTop: 15 }}>
      <Text style={{ fontSize: 18, color: "rgba(0,0,0,0.5)" }}>Price</Text>
      <View style={{ paddingTop: 10, flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
          <Text style={{ fontSize: 22, fontWeight: 500 }}>₹{price}</Text>
          <Text style={{ fontSize: 16, fontWeight: 500, color: "rgba(0,0,0,0.3)", textDecorationLine: "line-through", textDecorationStyle: "double" }}>₹{oldPrice}</Text>
        </View>

        <View style={{flexDirection:"row", gap:20, alignItems:"center", justifyContent:"center"}}>
          <Pressable style={{width:35, height:35, backgroundColor:"#009688", justifyContent:"center", alignItems:"center", borderRadius:10}}>
            <Entypo name="minus" size={24} color="white" />
          </Pressable>
          <Text style={{fontSize:20, fontWeight:400}}>0</Text>
          <Pressable style={{width:35, height:35, backgroundColor:"#009688", justifyContent:"center", alignItems:"center", borderRadius:10}}>
            <Entypo name="plus" size={24} color="white" />
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default PriceAndQuantity

const styles = StyleSheet.create({})