import { StyleSheet, SafeAreaView, Platform, ScrollView } from 'react-native'
import React from 'react'

import CheckLoginStatus from '../components/CheckLoginStatus'
import SearchBar from '../components/home/SearchBar'
import AddressBar from '../components/home/AddressBar'
import Categories from '../components/home/Categories'
import Carousel from '../sections/Carousel'
import PopularProducts from '../sections/PopularProducts'
import DealOfTheDay from '../sections/DealOfTheDay'
import Products from '../components/home/Products'
import AddressModal from '../sections/AddressModal'

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
            <AddressModal />
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})