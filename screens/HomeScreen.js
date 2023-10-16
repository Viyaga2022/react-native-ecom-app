import { StyleSheet, Text, View, SafeAreaView, Platform, ScrollView, Pressable, TextInput, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { BASE_URL } from '@env'
import { SliderBox } from 'react-native-image-slider-box'

const Category = ({ image, title }) => {
    return (
        <Pressable style={{ margin: 10, justifyContent: "center", alignItems: "center" }}>
            <Image source={{ uri: BASE_URL + image }} style={{ width: 50, height: 50, borderRadius: 50, resizeMode: "contain" }} />
            <Text style={{ textAlign: "center", marginTop: 5, fontSize: 12, fontWeight: 500 }}>{title}</Text>
        </Pressable>
    )
}

const HomeScreen = () => {
    const [categories, setCategories] = useState([])
    const [sliders, setSliders] = useState([])


    useEffect(() => {
        const categorieArray = [
            { image: '/assets/images/mutton.png', title: 'Mutton' },
            { image: '/assets/images/chicken.png', title: 'Chicken' },
            { image: '/assets/images/mutton.png', title: 'Mutton' },
            { image: '/assets/images/chicken.png', title: 'Chicken' },
            { image: '/assets/images/mutton.png', title: 'Mutton' },
            { image: '/assets/images/chicken.png', title: 'Chicken' },
        ]

        const slidersArray = [
            require('../assets/slider1.png'),
            require('../assets/slider2.png'),
            require('../assets/slider3.png')
        ]

        console.log(slidersArray[2])
        setCategories(categorieArray)
        setSliders(slidersArray)

    }, [])

    const checkLoginStatus = async () => {
        try {
            const token = await AsyncStorage.getItem('auth')
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
                        <TextInput placeholder='Search' />
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
                    {categories.map((categorie, index) => {
                        return (
                            <Category key={index} image={categorie.image} text={categorie.title} />
                        )
                    })}
                </ScrollView>

                <SliderBox images={sliders} sliderBoxHeight={175} autoPlay circleLoop dotColor='#13274F' inactiveDotColor='#90A4AE' ImageComponentStyle={{ width: '100%' }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})