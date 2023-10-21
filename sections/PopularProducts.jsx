import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import { useNavigation } from '@react-navigation/native'

const Products = ({ item }) => {
    const navigation = useNavigation()
    return (
        <Pressable onPress={() => navigation.navigate("ProductInfo", {item})} >
            <Image source={{ uri: item.image }} style={{ width:180, height:180 }}/>
        </Pressable>
    )
}

const PopularProducts = () => {
    const [popularProducts, setPopularProducts] = useState([])

    useEffect(() => {
        const popularProductsArray = [
            { id: 1, image: 'https://meat-shop-theme.myshopify.com/cdn/shop/products/Product2_2000x.jpg?v=1599636858',title: "Beef Ribs", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quos cumque fugit autem, quae incidunt adipisci saepe velit animi eum quibusdam aspernatur aut quia soluta doloremque aliquam inventore? Ut, ratione!", oldPrice:4400, price: 799, rating: 4.5, category: "mutton" },
            { id: 2, image: 'https://azim.commonsupport.com/Carneshop/assets/images/resource/shop/shop-1.jpg', title: "Mutton Curry", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quos cumque fugit autem, quae incidunt adipisci saepe velit animi eum quibusdam aspernatur aut quia soluta doloremque aliquam inventore? Ut, ratione!", oldPrice:4400, price: 999, rating: 4.9, category: "chicken" },
            { id: 3, image: 'https://azim.commonsupport.com/Carneshop/assets/images/resource/shop/shop-4.jpg', title: "Organ Meats", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quos cumque fugit autem, quae incidunt adipisci saepe velit animi eum quibusdam aspernatur aut quia soluta doloremque aliquam inventore? Ut, ratione!", oldPrice:4400, price: 1129, rating: 3.8, category: "chicken"},
            { id: 4, image: 'https://azim.commonsupport.com/Carneshop/assets/images/resource/shop/shop-3.jpg', title: "Beef Ribs", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quos cumque fugit autem, quae incidunt adipisci saepe velit animi eum quibusdam aspernatur aut quia soluta doloremque aliquam inventore? Ut, ratione!", oldPrice:4400, price: 799, rating: 4.5, category: "mutton" }
        ]

        setPopularProducts(popularProductsArray)

    }, [])

    return (
        <>
            <Title title={"Popular Products"}/>
            <View style={{ flexDirection:"row", flexWrap:"wrap", justifyContent:"center", gap:5}}>
                {popularProducts.map((item, index) => {
                    return (
                        <Products key={index} item={item} />
                    )
                })}
            </View>
            <Text style={{ height:1, borderWidth:2, borderColor:"#D0D0D0", marginTop:15 }}></Text>
        </>

    )
}

export default PopularProducts

const styles = StyleSheet.create({})