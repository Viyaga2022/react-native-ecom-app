import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from 'axios';

//Login User 
const loginUser = async (loginData, navigation) => {

  try {
    const response = await axios.post('http://10.0.2.2:6000/api/user/login', loginData)
    if (response.data.loginStatus) {
      const token = response.data.jwtToken
      await AsyncStorage.setItem('auth', token)
      navigation.replace('Main')
    } else {
      Alert.alert(response.data.message, "If Don't have an account please Sign up")
    }
  } catch (error) {
    console.log(error)
    Alert.alert("", "An error occurred please try after sometime")
  }
}

//Register User
const registerUser = async (userData, navigation) => {

  try {
    const response = await axios.post('http://10.0.2.2:6000/api/user/register', userData)

    if (response.data.isRegistered) {
      Alert.alert("Registeration Successfull", response.data.message, [
        {
          text: "OK",
          onPress: (() => navigation.navigate("Login"))
        }
      ])

    } else {
      Alert.alert("", response.data.message)
    }
  } catch {
    console.log(error)
    Alert.alert("Registeration Failed", "An error occurred")
  }

}

// authorization header
const axiosAuthHeaders = async (navigation) => {
  const token = await AsyncStorage.getItem('auth')
  if (!token) {
    return navigation.replace('Login')
  }

  const obj = {
    headers: { authorization: `Bearer ${token}` },
  }

  return obj
}

const myAccount = async (navigation) => {
  AsyncStorage.setItem('auth', '')
  try {
    const headers = await axiosAuthHeaders(navigation)
    const response = await axios.get('http://10.0.2.2:6000/api/user/myAccount', headers)

    if (response.data.isAuthorized) {
      return response.data.userId
    }

    navigation.replace('Login')

  } catch (error) {
    console.log(error)
    navigation.replace('Login')
  }
}

//addAddress
const addAddress = async (addressDetails, navigation) => {

  try {
    const headers = await axiosAuthHeaders(navigation);
    const respose = await axios.post("http://10.0.2.2:6000/api/user/address",
      addressDetails, headers
    )

    if (respose.data.isSaved) {

      Alert.alert("", respose.data.message, [
        {
          text: "OK",
          onPress: (() => navigation.goBack())
        }
      ])

    } else {
      Alert.alert("", respose.data.message)
    }

  } catch (error) {
    console.error(error.toJSON())
    Alert.alert("", "An error occurred please try after sometime")
  }
}

export {
  loginUser,
  registerUser,
  axiosAuthHeaders,
  myAccount,
  addAddress,
}