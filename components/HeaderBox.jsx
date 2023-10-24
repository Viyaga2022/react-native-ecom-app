import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';

const HeaderBox = ({ title }) => {
    const navigation = useNavigation()
  return (
    <View style={{ height: 50, backgroundColor: "#009688", flexDirection:"row", alignItems:"center", gap:15, paddingLeft:15}}>
    <Pressable
      onPress={() => navigation.goBack()}
     >
      <AntDesign name="arrowleft" size={26} color="black" />
    </Pressable>
    <Text style={{ fontSize: 18, fontWeight: "bold" }}>{title}</Text>
  </View>
  )
}

export default HeaderBox

const styles = StyleSheet.create({})