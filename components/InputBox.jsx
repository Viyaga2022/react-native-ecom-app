import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const InputBox = ({ text, placeholder, width }) => {
  return (
    <View style={{ paddingTop: 10, width }} >
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{text}</Text>
      <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={"black"} />
    </View>
  )
}

export default InputBox

const styles = StyleSheet.create({
  input: {
    borderColor: "#D0D0D0",
    borderWidth: 1.5,
    borderRadius: 5,
    marginTop: 10,
    padding: 10
  },
})