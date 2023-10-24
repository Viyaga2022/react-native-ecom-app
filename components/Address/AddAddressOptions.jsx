import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const AddAddressOptions = () => {
  const navigation = useNavigation()

  return (
    <>
      <Pressable
        onPress={() => navigation.navigate("AddAddress")}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 10,
          fontSize: 18,
          fontWeight: 500,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: "#00968880",
          paddingVertical: 10
        }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 5 }}>
          <Ionicons name="location-sharp" size={24} color="#009688" />
          <Text style={{ fontSize: 17 }}>Add a new Address</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 18,
          fontWeight: 500,
          borderColor: "#00968880",
          borderBottomWidth: 1,
          paddingVertical: 10
        }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 5 }}>
          <Ionicons name="locate-sharp" size={28} color="#009688" />
          <Text style={{ fontSize: 17 }}>Use My Current Location</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </Pressable>
    </>
  )
}

export default AddAddressOptions

const styles = StyleSheet.create({})