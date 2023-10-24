import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import SearchProducts from '../components/home/SearchProducts';
import AddAddressOptions from '../components/Address/AddAddressOptions';

const YourAddressesScreen = () => {
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
        <SearchProducts />
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Your Addresses</Text>
          <AddAddressOptions />
        </View>
      </ScrollView>
    </View>
  )
}

export default YourAddressesScreen

const styles = StyleSheet.create({})