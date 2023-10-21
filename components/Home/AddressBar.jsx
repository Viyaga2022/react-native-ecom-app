import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AddressBar = () => {
    const navigation = useNavigation()
    return (
        <Pressable onPress={() => navigation.navigate("AddAddress")} style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "rgba(0, 150, 136, 0.50)", padding: 10 }}>
            <Ionicons name="location-outline" size={24} color="black" />
            <Text style={{ fontSize: 13, fontWeight: 500 }}>Deliver to Sujan - Bangalore 625706</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </Pressable>
    )
}

export default AddressBar

const styles = StyleSheet.create({})