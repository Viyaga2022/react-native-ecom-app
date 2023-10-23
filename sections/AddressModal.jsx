import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomModal, SlideAnimation } from 'react-native-modals'
import { useDispatch, useSelector } from 'react-redux'
import { setAddressModalVisible } from '../redux/CommonSlice'
import AddressModalContent from '../components/Address/AddressModalContent'
import { useNavigation } from '@react-navigation/native'

const AddressModal = () => {
    const modalVisible = useSelector((state) => state.common.AddressModalVisible)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const setModalVisible = (bool) => {
        dispatch(setAddressModalVisible(bool))
    }

    return (
        <BottomModal
            visible={modalVisible}
            onHardwareBackPress={() => setModalVisible(false)}
            onTouchOutside={() => setModalVisible(false)}
            modalAnimation={
                new SlideAnimation({
                    slideFrom: "bottom"
                })
            }
            swipeDirection={["up", "down"]}
            swipeThreshold={200}
        >
           <AddressModalContent navigation={navigation} />
        </BottomModal>
    )
}

export default AddressModal

const styles = StyleSheet.create({})