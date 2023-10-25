import { Dimensions, ImageBackground, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const ProductImage = ({ image }) => {
    const { width } = Dimensions.get("window")
    const height = width * 75 / 100

    const navigation = useNavigation()
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            <ScrollView style={{ position: "relative" }} horizontal showHorizontalScrollIndicator={false}>
                <ImageBackground source={{ uri: image }} style={{ width, height, resizeMode: "contain" }} />
            </ScrollView>

            <Pressable
                onPress={() => navigation.goBack()}
                style={{
                    width: 40,
                    height: 40,
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                    borderRadius: 20,
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    top: 20,
                    left: 20
                }}>
                <AntDesign name="arrowleft" size={24} color="white" />
            </Pressable>

            <Pressable
                style={{
                    width: 40,
                    height: 40,
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                    borderRadius: 20,
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    top: 20,
                    right: 20,
                }}>
                <Ionicons name="heart-sharp" size={24} color="white" />
            </Pressable>
        </ScrollView>
    )
}

export default ProductImage

const styles = StyleSheet.create({})