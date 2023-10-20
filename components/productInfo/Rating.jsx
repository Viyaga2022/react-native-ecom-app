import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Rating = ({ rating }) => {
    return (
        <View style={{paddingTop:10,flexDirection:"row", justifyContent:"space-between", alignItems:"center" }}>
            <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", gap:5}}>
                <AntDesign name="star" size={24} color="black" />
                <Text>{rating}</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", gap:5}}>
                <Ionicons name="time-outline" size={24} color="black" />
                <Text>3 - 4 hours</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", gap:5}}>
                <MaterialCommunityIcons name="truck-check" size={24} color="black" />
                <Text>Free Delivery</Text>
            </View>
        </View>
    )
}

export default Rating

const styles = StyleSheet.create({})