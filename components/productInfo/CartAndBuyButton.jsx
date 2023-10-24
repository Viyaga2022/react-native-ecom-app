import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/CartSlice'

const CartAndBuyButton = ({ item }) => {
  const [addToCartText, setAddToCartText] = useState("ADD TO CART")
  const dispatch = useDispatch()

  const addToCartClicked = (item) => {
    console.log({ Hello: item })
    if (addToCartText === "ADD TO CART") {
      setAddToCartText("ADDED TO CART")
      dispatch(addToCart(item))
      setTimeout(() => {
        setAddToCartText("ADD TO CART")
      }, 60000)
    }
  }

  const cart = useSelector((state) => state.cart.cart)
  console.log({ cart });

  return (
    <Pressable
      onPress={() => addToCartClicked(item)}
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#009688",
        padding: 15,
        margin: 10,
        borderRadius: 15,
        flex: 1,
        marginTop:20
      }}>
      <Text style={{ color: "white", fontSize: 18, fontWeight: 500 }}>{addToCartText}</Text>
    </Pressable>

  )
}

export default CartAndBuyButton

const styles = StyleSheet.create({})
