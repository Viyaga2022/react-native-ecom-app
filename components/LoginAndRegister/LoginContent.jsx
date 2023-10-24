import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Pressable, Alert  } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginContent = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigation = useNavigation()

  const handleLogin = () => {
    const loginData = {
      email,
      password
    }

    axios.post('http://10.0.2.2:6000/api/user/login', loginData)
      .then((response) => {
        if (response.data.loginStatus) {
          const token = response.data.jwtToken
          AsyncStorage.setItem('auth', token)
          navigation.replace('Main')
        } else {
          Alert.alert(response.data.message, "If Don't have an account please Sign up")
        }

      }).catch((error) => {
        console.log(error)
        Alert.alert("", "An error occurred please try after sometime")
      })
  }

  return (
    <KeyboardAvoidingView>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 12, color: "#041E42" }}>Login In to Your Account</Text>
      </View>

      <View style={{ marginTop: 50 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: "#D0D0D0",
            paddingVertical: 5,
            borderRadius: 5,
            marginTop: 30
          }}
        >
          <MaterialIcons style={{ marginLeft: 8 }} name="email" size={24} color="gray" />
          <TextInput value={email} onChange={(value) => { console.log(value.nativeEvent.text); setEmail(value.nativeEvent.text) }} style={{ color: "gray", marginVertical: 10, width: 300, fontSize: email ? 16 : 16 }} placeholder='Enter Your Email' />
        </View>
      </View>

      <View style={{ marginTop: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: "#D0D0D0",
            paddingVertical: 5,
            borderRadius: 5,
            marginTop: 30
          }}
        >
          <AntDesign style={{ marginLeft: 8 }} name="lock1" size={24} color="black" />
          <TextInput value={password} onChange={(value) => { console.log(value.nativeEvent.text); setPassword(value.nativeEvent.text) }} secureTextEntry={true} style={{ color: "gray", marginVertical: 10, width: 300 }} placeholder='Enter Your Password' />
        </View>
      </View>

      <View style={{ marginTop: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <Text>Keep me logged in</Text>
        <Text style={{ color: "#007FFF", fontWeight: 500 }}> Forgot Password</Text>
      </View>

      <View style={{ marginTop: 50 }} />

      <Pressable onPress={handleLogin} style={{ width: 200, backgroundColor: "#FEBE10", padding: 15, marginLeft: "auto", marginRight: "auto", borderRadius: 6 }}>
        <Text style={{ textAlign: "center", color: "white", fontSize: 16, fontWeight: "bold" }}>Login</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Register")} style={{ marginTop: 15 }}>
        <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>Don't have an account? Sign Up</Text>
      </Pressable>
    </KeyboardAvoidingView>
  )
}

export default LoginContent

const styles = StyleSheet.create({})