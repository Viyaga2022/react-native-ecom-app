import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Pressable, Alert } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { registerUser } from '../commonFunctions';

const RegisterContent = () => {
  const [name, setName] = React.useState("")
  const [userEmail, setUserEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const navigation = useNavigation()

  const handleRegister = async() => {
    const userData = { name, email: userEmail, password}
    await registerUser(userData, navigation)
    setName("")
    setUserEmail("")
    setPassword("")
  }

  return (
    <KeyboardAvoidingView>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 12, color: "#041E42" }}>Register To Your Account</Text>
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
          <Ionicons style={{ marginLeft: 8 }} name="ios-person" size={24} color="gray" />
          <TextInput value={name} onChange={(value) => { console.log(value.nativeEvent.text); setName(value.nativeEvent.text) }} style={{ color: "gray", marginVertical: 10, width: 300, fontSize: name ? 16 : 16 }} placeholder='Enter Your Name' />
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
          <MaterialIcons style={{ marginLeft: 8 }} name="email" size={24} color="gray" />
          <TextInput value={userEmail} onChange={(value) => { console.log(value.nativeEvent.text); setUserEmail(value.nativeEvent.text) }} style={{ color: "gray", marginVertical: 10, width: 300, fontSize: userEmail ? 16 : 16 }} placeholder='Enter Your Email' />
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

      <Pressable onPress={handleRegister} style={{ width: 200, backgroundColor: "#FEBE10", padding: 15, marginLeft: "auto", marginRight: "auto", borderRadius: 6 }}>
        <Text style={{ textAlign: "center", color: "white", fontSize: 16, fontWeight: "bold" }}>Register</Text>
      </Pressable>

      <Pressable onPress={() => navigation.goBack()} style={{ marginTop: 15 }}>
        <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>Already Have an accoun? Sign in</Text>
      </Pressable>
    </KeyboardAvoidingView>
  )
}

export default RegisterContent

const styles = StyleSheet.create({})