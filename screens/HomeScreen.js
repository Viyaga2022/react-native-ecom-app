import { StyleSheet, Text, View, SafeAreaView, Platform, ScrollView, Pressable, TextInput, Image } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import MuttonImg from '../assets/mutton.png'
import ChickenImg from '../assets/chicken.png'

const Category = ({ image, text }) => {
    console.log(image)
    return (
        <Pressable style={{ margin: 10, justifyContent: "center", alignItems: "center" }}>
            <Image source={image} style={{ width: 50, height: 50, borderRadius: 50, resizeMode: "contain" }} />
            <Text style={{ textAlign: "center", marginTop: 5, fontSize: 12, fontWeight: 500 }}>{text}</Text>
        </Pressable>
    )

}

const HomeScreen = () => {

    const checkLoginStatus = async () => {
        try {
            const token = await AsyncStorage.getItem('auth')
            console.log(token)
            if (!token) {
                navigation.replace('Login')
            }
        } catch (error) {
            console.log(error)
        }
    }
    checkLoginStatus()

    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? 40 : 0, flex: 1 }}>
            <ScrollView>
                <View style={{ backgroundColor: "#00CED1", flexDirection: "row", padding: 10 }}>
                    <Pressable style={{ flexDirection: "row", alignItems: "center", backgroundColor: "white", flex: 1, gap: 10, marginHorizontal: 7, borderRadius: 3, height: 38 }}>
                        <AntDesign style={{ paddingLeft: 10 }} name="search1" size={24} color="black" />
                        <TextInput placeholder='Search amazon.in' />
                    </Pressable>
                    <Feather name="mic" size={24} color="black" />
                </View>
                <View>
                    <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#AFEEEE", padding: 10 }}>
                        <Ionicons name="location-outline" size={24} color="black" />
                        <Text style={{ fontSize: 13, fontWeight: 500 }}>Deliver to Sujan - Bangalore 625706</Text>
                        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                    </Pressable>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Category image={MuttonImg} text="Mutton" />
                    <Category image={ChickenImg} text="Chicken" />
                    <Category image={MuttonImg} text="Mutton" />
                    <Category image={ChickenImg} text="Chicken" />
                    <Category image={MuttonImg} text="Mutton" />
                    <Category image={ChickenImg} text="Chicken" />
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})