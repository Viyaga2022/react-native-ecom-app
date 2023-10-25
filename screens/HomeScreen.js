import { StyleSheet, ScrollView, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import CheckLoginStatus from '../components/CheckLoginStatus'
import SearchProducts from '../components/home/SearchProducts'
import AddressBar from '../components/home/AddressBar'
import Categories from '../components/home/Categories'
import Carousel from '../sections/Carousel'
import PopularProducts from '../sections/PopularProducts'
import DealOfTheDay from '../sections/DealOfTheDay'
import Products from '../sections/Products'
import AddressModal from '../sections/AddressModal'
import AsyncStorage from '@react-native-async-storage/async-storage'
const HomeScreen = () => {
  const insets = useSafeAreaInsets()
  
  return (
    <>
      <CheckLoginStatus />
      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right
        }}
      >
        <ScrollView overScrollMode="never">
          <SearchProducts />
          <AddressBar />
          <Categories />
          <Carousel />
          <PopularProducts />
          <DealOfTheDay />
          <Products />
          <AddressModal />
        </ScrollView>
      </View>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})