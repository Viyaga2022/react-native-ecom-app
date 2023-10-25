import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';

import HeaderBox from '../components/HeaderBox';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { addAddress } from '../components/commonFunctions'
import CheckLoginStatus from '../components/CheckLoginStatus';

const AddAddressScreen = () => {
  const [fullName, setFullName] = useState("")
  const [mobileNo, setMobileNo] = useState("")
  const [pincode, setPincode] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [houseNo, setHouseNo] = useState("")
  const [street, setStreet] = useState("")
  const [landmark, setLandmark] = useState("")

  const insets = useSafeAreaInsets()
  const navigation = useNavigation()

  const handleAddAddress = async () => {

    const addressDetails = {
      fullName, mobileNo, pincode,
      state, city, houseNo, street, landmark
    }

    await addAddress(addressDetails, navigation)

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
      <CheckLoginStatus />
      <ScrollView overScrollMode='never'>
        <HeaderBox title="Add a new Address" />

        <View style={{ padding: 10 }}>

          <View style={{ paddingTop: 10 }} >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Full name</Text>
            <TextInput style={styles.input} onChange={(e) => setFullName(e.nativeEvent.text)} value={fullName} placeholder="Enter Your Name" placeholderTextColor={"black"} />
          </View>

          <View style={{ paddingTop: 10 }} >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Mobile No</Text>
            <TextInput style={styles.input} onChange={(e) => setMobileNo(e.nativeEvent.text)} value={mobileNo} placeholder="Mobile number" placeholderTextColor={"black"} />
          </View>

          <View>

            <View style={{ paddingTop: 10 }} >
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>Pincode</Text>
              <TextInput style={styles.input} onChange={(e) => setPincode(e.nativeEvent.text)} vlaue={pincode} placeholder="" placeholderTextColor={"black"} />
            </View>

          </View>

          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10 }}>

            <View style={{ paddingTop: 10, width: "48%" }} >
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>State</Text>
              <TextInput style={styles.input} onChange={(e) => setState(e.nativeEvent.text)} value={state} placeholder="" placeholderTextColor={"black"} />
            </View>

            <View style={{ paddingTop: 10, width: "48%" }} >
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>City</Text>
              <TextInput style={styles.input} onChange={(e) => setCity(e.nativeEvent.text)} value={city} placeholder="" placeholderTextColor={"black"} />
            </View>

          </View>

          <View style={{ paddingTop: 10 }} >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>House No,Building,Company</Text>
            <TextInput style={styles.input} onChange={(e) => setHouseNo(e.nativeEvent.text)} value={houseNo} placeholder="" placeholderTextColor={"black"} />
          </View>

          <View style={{ paddingTop: 10 }} >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Area,Street,sector,village</Text>
            <TextInput style={styles.input} onChange={(e) => setStreet(e.nativeEvent.text)} value={street} placeholder="" placeholderTextColor={"black"} />
          </View>

          <View style={{ paddingTop: 10 }} >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Landmark</Text>
            <TextInput style={styles.input} onChange={(e) => setLandmark(e.nativeEvent.text)} value={landmark} placeholder="" placeholderTextColor={"black"} />
          </View>

          <Pressable onPress={() => handleAddAddress()} style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#009688", padding: 15, margin: 10, borderRadius: 15, flex: 1, marginTop: 20 }}>
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
    borderColor: "#D0D0D0",
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 10,
    padding: 10
  },
})