import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductImage from '../components/productInfo/ProductImage'
import ProductTitleDescription from '../components/productInfo/ProductTitleDescription'
import { useRoute } from '@react-navigation/native'
import Rating from '../components/productInfo/Rating'
import PriceAndQuantity from '../components/productInfo/PriceAndQuantity'
import CartAndBuyButton from '../components/productInfo/CartAndBuyButton'

const ProductInfoScreen = () => {
  const route = useRoute()
  const item = route.params.item

  return (
    <ScrollView style={{ backgroundColor: "white", flex:1}}>
      <ProductImage image={item.image} />
      <View style={{padding:15}}>
        <ProductTitleDescription title={item.title} description={item.description} />
        <Rating rating={item.rating} />
        <PriceAndQuantity price={item.price} oldPrice={item.oldPrice} />
      </View>
      <Text style={{height:1, backgroundColor:"rgba(0, 150, 136, 0.20)", marginVertical:20}}></Text>
      <CartAndBuyButton />
    </ScrollView>
  )
}

export default ProductInfoScreen

const styles = StyleSheet.create({})