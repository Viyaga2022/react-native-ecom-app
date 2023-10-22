import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/CartSlice'

const ProductBox = ({ item }) => {
    const [addToCartText, setAddToCartText] = useState("Add To Cart")
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const addToCartClicked = ({ item }) => {
        if (addToCartText === "Add To Cart") {
            setAddToCartText("Added To Cart")
            dispatch(addToCart(item))
            setTimeout(() => {
                setAddToCartText("Add To Cart")
            }, 60000)
        }
    }
    return (
        <Pressable
            onPress={() => navigation.navigate("ProductInfo", {
                item: item
            })}
            style={{ margin: 20 }}
        >
            <Image source={{ uri: item.image }} style={{ width: 150, height: 150, resizeMode: "contain", borderRadius: 5 }} />
            <Text numberOfLines={1} style={{ fontSize: 16, fontWeight: 400, marginTop: 10, width: 150 }}>{item.title}</Text>
            <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>{item.price}</Text>
                <Text style={{ color: "#FFC72C", fontSize: 15, fontWeight: "bold" }}>{item.rating} ratings</Text>
            </View>
            <Pressable onPress={() => addToCartClicked({ item })} style={{ marginTop: 12, alignItems: "center", justifyContent: "center", padding: 10, backgroundColor: "#FFC72C", borderRadius: 20, marginHorizontal: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: 500 }}>{addToCartText}</Text>
            </Pressable>
        </Pressable>
    )
}

export default ProductBox

const styles = StyleSheet.create({})