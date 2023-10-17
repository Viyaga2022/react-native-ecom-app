import { StyleSheet, SafeAreaView, Platform, ScrollView } from 'react-native'
import React from 'react'

import CheckLoginStatus from '../components/CheckLoginStatus'
import SearchBar from '../components/SearchBar'
import LocationBar from '../components/LocationBar'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'

const HomeScreen = () => {
    return (
        <>
            <CheckLoginStatus />
            <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? 40 : 0, flex: 1 }}>
                <ScrollView>
                    <SearchBar />
                    <LocationBar />
                    <Categories />
                    <Carousel />
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})