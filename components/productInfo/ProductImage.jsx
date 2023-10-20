import { Dimensions, ImageBackground, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const ProductImage = () => {
    const route = useRoute()
    const item = route.params.item
    const { width } = Dimensions.get("window")
    const height = width * 75 / 100

    const navigation = useNavigation()
    return (
        <>
            <ScrollView style={{ position: "relative" }} horizontal showHorizontalScrollIndicator={false}>
                <ImageBackground source={{ uri: item.image }} style={{ width, height, resizeMode: "contain" }} />
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
                    top: 30,
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
                    top: 30,
                    right: 20,
                }}>
                <Ionicons name="heart-sharp" size={24} color="white" />
            </Pressable>
        </>
    )
}

export default ProductImage

const styles = StyleSheet.create({})