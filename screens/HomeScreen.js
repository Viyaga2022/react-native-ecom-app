import { StyleSheet, SafeAreaView, Platform, ScrollView } from 'react-native'
import React from 'react'

import CheckLoginStatus from '../components/CheckLoginStatus'
import SearchBar from '../components/Home/SearchBar'
import AddressBar from '../components/Home/AddressBar'
import Categories from '../components/Home/Categories'
import Carousel from '../sections/Carousel'
import PopularProducts from '../sections/PopularProducts'
import DealOfTheDay from '../sections/DealOfTheDay'
import Products from '../components/Home/Products'

const HomeScreen = () => {
    return (
        <>
            <CheckLoginStatus />
            <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? 40 : 0, flex: 1 }}>
                <ScrollView>
                    <SearchBar />
                    <AddressBar />
                    <Categories />
                    <Carousel />
                    <PopularProducts />
                    <DealOfTheDay />
                    <Products />
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})