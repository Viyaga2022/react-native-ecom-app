import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductImage from '../components/ProductInfo/ProductImage'
import ProductTitleDescription from '../components/productInfo/ProductTitleDescription'

const ProductInfoScreen = () => {
  return (
    <ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        <ProductImage />
      </ScrollView>
      <ProductTitleDescription />
    </ScrollView>

  )
}

export default ProductInfoScreen

const styles = StyleSheet.create({})