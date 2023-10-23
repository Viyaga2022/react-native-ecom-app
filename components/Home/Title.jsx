import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({ title }) => {
  return (
    <Text style={{ margin: 10, fontWeight: "bold", fontSize: 18 }}>{title}</Text>
  )
}

export default Title

const styles = StyleSheet.create({})