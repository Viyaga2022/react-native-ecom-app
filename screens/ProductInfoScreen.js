import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductImage from '../components/ProductInfo/ProductImage'
import ProductTitleDescription from '../components/productInfo/ProductTitleDescription'
import { useRoute } from '@react-navigation/native'
import Rating from '../components/productInfo/Rating'
import PriceAndQuantity from '../components/productInfo/PriceAndQuantity'

const ProductInfoScreen = () => {
  const route = useRoute()
  const item = route.params.item

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <ProductImage image={item.image} />
      <View style={{padding:15}}>
        <ProductTitleDescription title={item.title} description={item.description} />
        <Rating rating={item.rating} />
        <PriceAndQuantity price={item.price} oldPrice={item.oldPrice} />
      </View>

    </ScrollView>
  )
}

export default ProductInfoScreen

const styles = StyleSheet.create({})