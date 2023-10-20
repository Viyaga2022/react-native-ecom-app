import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductTitleDescription = ({title, description}) => {
  return (
    <View>
      <Text style={{fontSize:25, fontWeight:"500"}}>{title}</Text>
      <Text style={{fontSize:18, fontWeight:"400", paddingTop:5}}>{description}</Text>
    </View>
  )
}

export default ProductTitleDescription

const styles = StyleSheet.create({})