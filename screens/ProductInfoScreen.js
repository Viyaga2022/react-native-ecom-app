import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'

import ProductImage from '../components/productInfo/ProductImage'
import ProductTitleDescription from '../components/productInfo/ProductTitleDescription'
import Rating from '../components/productInfo/Rating'
import PriceAndQuantity from '../components/productInfo/PriceAndQuantity'
import CartAndBuyButton from '../components/productInfo/CartAndBuyButton'
import SearchProducts from '../components/home/SearchProducts'

const ProductInfoScreen = () => {
  const route = useRoute()
  const item = route.params.item
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
      <ScrollView overScrollMode='never'>
        <ProductImage image={item.image} />
        <View style={{ padding: 15 }}>
          <ProductTitleDescription title={item.title} description={item.description} />
          <Rating rating={item.rating} />
          <PriceAndQuantity price={item.price} oldPrice={item.oldPrice} />
        </View>
        <Text style={{ height: 1, backgroundColor: "rgba(0, 150, 136, 0.20)", marginVertical: 20 }}></Text>
        <CartAndBuyButton item={item} />
      </ScrollView>
    </View>
  )
}

export default ProductInfoScreen

const styles = StyleSheet.create({})