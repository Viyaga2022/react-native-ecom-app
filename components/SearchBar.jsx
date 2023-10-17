import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={{ backgroundColor: "#00CED1", flexDirection: "row", padding: 10 }}>
            <Pressable style={{ flexDirection: "row", alignItems: "center", backgroundColor: "white", flex: 1, gap: 10, marginHorizontal: 7, borderRadius: 3, height: 38 }}>
                <AntDesign style={{ paddingLeft: 10 }} name="search1" size={24} color="black" />
                <TextInput placeholder='Search' />
            </Pressable>
            <Feather name="mic" size={24} color="black" />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({})