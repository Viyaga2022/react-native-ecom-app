import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PriceAndQuantity = ({price, oldPrice}) => {
  return (
    <View style={{paddingTop:10}}>
      <Text>Price</Text>
      <View style={{paddingTop:10,flexDirection:"row", justifyContent:"space-between"}}>
        <View style={{flexDirection:"row", gap:15}}>
            <Text>{price}</Text>
            <Text>{oldPrice}</Text>
        </View>
        <View>
            <Text>Quantity</Text>
        </View>
      </View>
    </View>
  )
}

export default PriceAndQuantity

const styles = StyleSheet.create({})