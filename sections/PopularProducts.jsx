import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../components/Title'

const Products = ({ image }) => {
    return (
        <Pressable>
            <Image source={{ uri: image }} style={{ width:180, height:180 }}/>
        </Pressable>
    )
}

const PopularProducts = () => {
    const [popularProducts, setPopularProducts] = useState([])

    useEffect(() => {
        const popularProductsArray = [
            { id: 1, image: 'https://meat-shop-theme.myshopify.com/cdn/shop/products/Product2_2000x.jpg?v=1599636858' },
            { id: 2, image: 'https://azim.commonsupport.com/Carneshop/assets/images/resource/shop/shop-1.jpg' },
            { id: 3, image: 'https://azim.commonsupport.com/Carneshop/assets/images/resource/shop/shop-4.jpg' },
            { id: 4, image: 'https://azim.commonsupport.com/Carneshop/assets/images/resource/shop/shop-3.jpg' }
        ]

        setPopularProducts(popularProductsArray)

    }, [])

    return (
        <>
            <Title title={"Popular Products"}/>
            <View style={{ flexDirection:"row", flexWrap:"wrap", justifyContent:"center", gap:5}}>
                {popularProducts.map((item, index) => {
                    return (
                        <Products key={index} image={item.image} />
                    )
                })}
            </View>
            <Text style={{ height:1, borderWidth:2, borderColor:"#D0D0D0", marginTop:15 }}></Text>
        </>

    )
}

export default PopularProducts

const styles = StyleSheet.create({})