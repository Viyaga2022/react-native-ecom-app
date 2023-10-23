import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { ModalContent } from 'react-native-modals'
import { useDispatch } from 'react-redux'
import { setAddressModalVisible } from '../../redux/CommonSlice'

const AddressModalContent = ({ navigation }) => {
    const dispatch = useDispatch()
    const setModalVisible = (bool) => {
        dispatch(setAddressModalVisible(bool));
    }

    return (
        <ModalContent style={{ width: "100%", height: 280 }}>
            <View>
                <Text style={{ fontSize: 16, fontWeight: 500 }}>Choose Your Location</Text>
                <Text style={{ fontSize: 15, fontWeight: 500, color: "gray", marginTop: 5 }}>Select a delivery location to see product availablity and delivery options</Text>
            </View>
            <ScrollView style={{ marginTop: 18 }} horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: "row", gap: 15 }}>
                    <Pressable
                        onPress={() => {
                            setModalVisible(false)
                            navigation.navigate("YourAddresses")
                        }}
                        style={{
                            height: 140,
                            width: 140,
                            borderColor: "#00968833",
                            borderWidth: 2,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                        <Text
                            style={{
                                fontWeight: 500,
                                textAlign: "center",
                                color: "#0066b2"
                            }}>
                            Add on Address or pick-up point
                        </Text>
                    </Pressable>
                </View>
            </ScrollView>
        </ModalContent>
    )
}

export default AddressModalContent

const styles = StyleSheet.create({})