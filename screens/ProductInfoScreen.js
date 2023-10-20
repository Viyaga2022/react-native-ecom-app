import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'

const ProductInfoScreen = () => {
  return (
    <ScrollView style={{marginTop: Platform.OS === "android"?40: 55, flex:1, backgroundColor:"white"}} showsVerticalScrollIndicator={false} >
      <SearchBar />
    </ScrollView>
  )
}

export default ProductInfoScreen

const styles = StyleSheet.create({})