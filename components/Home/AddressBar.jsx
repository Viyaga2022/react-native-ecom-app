import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const LocationBar = () => {
    return (
        <View>
            <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#AFEEEE", padding: 10 }}>
                <Ionicons name="location-outline" size={24} color="black" />
                <Text style={{ fontSize: 13, fontWeight: 500 }}>Deliver to Sujan - Bangalore 625706</Text>
                <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
            </Pressable>
        </View>
    )
}

export default LocationBar

const styles = StyleSheet.create({})