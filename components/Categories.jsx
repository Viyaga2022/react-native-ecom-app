import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native'
import React,{ useEffect, useState } from 'react'
import { BASE_URL } from '@env'

const Category = ({ image, title }) => {
    return (
        <Pressable style={{ margin: 10, justifyContent: "center", alignItems: "center" }}>
            <Image source={{ uri: BASE_URL + image }} style={{ width: 50, height: 50, borderRadius: 50, resizeMode: "contain" }} />
            <Text style={{ textAlign: "center", marginTop: 5, fontSize: 12, fontWeight: 500 }}>{title}</Text>
        </Pressable>
    )
}

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const categorieArray = [
            { image: '/assets/images/mutton.png', title: 'Mutton' },
            { image: '/assets/images/chicken.png', title: 'Chicken' },
            { image: '/assets/images/mutton.png', title: 'Mutton' },
            { image: '/assets/images/chicken.png', title: 'Chicken' },
            { image: '/assets/images/mutton.png', title: 'Mutton' },
            { image: '/assets/images/chicken.png', title: 'Chicken' },
        ]

        setCategories(categorieArray)

    }, [])

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((categorie, index) => {
                return (
                    <Category key={index} image={categorie.image} text={categorie.title} />
                )
            })}
        </ScrollView>
    )
}

export default Categories

const styles = StyleSheet.create({})