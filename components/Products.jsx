import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

import ProductBox from './ProductBox'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const productsArray = [
            {image:"https://z.commonsupport.com/corvex/wp-content/uploads/2021/02/shop-1.jpg", title:"Beef Ribs", price: 799, rating:4.5},
            {image:"https://z.commonsupport.com/corvex/wp-content/uploads/2021/02/shop-2.jpg", title:"Beef Steaks", price: 1298, rating:4.7},
            {image:"https://z.commonsupport.com/corvex/wp-content/uploads/2021/02/shop-3.jpg", title:"Organ Meats", price: 1129, rating:3.8},
            {image:"https://z.commonsupport.com/corvex/wp-content/uploads/2021/02/shop-4.jpg", title:"Mutton Curry", price: 999, rating:4.9},
            {image:"https://z.commonsupport.com/corvex/wp-content/uploads/2021/02/shop-1.jpg", title:"Beef Ribs", price: 799, rating:4.5},
            {image:"https://z.commonsupport.com/corvex/wp-content/uploads/2021/02/shop-2.jpg", title:"Beef Steaks", price: 1298, rating:4.7},
            {image:"https://z.commonsupport.com/corvex/wp-content/uploads/2021/02/shop-3.jpg", title:"Organ Meats", price: 1129, rating:3.8},
            {image:"https://z.commonsupport.com/corvex/wp-content/uploads/2021/02/shop-4.jpg", title:"Mutton Curry", price: 999, rating:4.9}
        ]

        setProducts(productsArray)
    },[])

  return (
    <View style={{ marginTop:10, flexDirection:"row", flexWrap: "wrap", alignItems:"center", justifyContent:"center"}}>
      {products.map((item, index) => {
        return(
            <ProductBox key={index} item={item} />
        )
      })}
    </View>
  )
}

export default Products

const styles = StyleSheet.create({})