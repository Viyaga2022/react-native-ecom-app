import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';

import InputBox from '../components/InputBox'
import HeaderBox from '../components/HeaderBox';

const AddAddressScreen = () => {
  const insets = useSafeAreaInsets()
  const handleAddAddress = () => {
    console.log("Saved")
  }

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
        <HeaderBox title="Add a new Address" />

        <View style={{ padding: 10 }}>

          <InputBox text="Full name" placeholder="Enter Your Name" />
          <InputBox text="Mobile No" placeholder="Mobile number" />

          <View>
            <InputBox text="Pincode" placeholder="" />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10 }}>
            <InputBox text="State" placeholder="" width="48%" />
            <InputBox text="City" placeholder="" width="48%" />
          </View>

          <InputBox text="Flat,House No,Building,Company" placeholder="" />
          <InputBox text="Area,Street,sector,village" placeholder="" />
          <InputBox text="Landmark" placeholder="" />

          <Pressable onPress={() => handleAddAddress()} style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#009688", padding: 15, margin: 10, borderRadius: 15, flex: 1 }}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: 500 }}>Save Address</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  )
}

export default AddAddressScreen

const styles = StyleSheet.create({
  input: {
    borderColor: "#00968880",
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 10,
    padding: 10
  },
})