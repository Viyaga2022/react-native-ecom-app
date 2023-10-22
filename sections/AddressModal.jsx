import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { BottomModal, ModalContent, SlideAnimation } from 'react-native-modals'
import { useDispatch, useSelector } from 'react-redux'
import { setAddressModalVisible } from '../redux/CommonSlice'

const AddressModal = () => {
   const modalVisible = useSelector((state) => state.common.AddressModalVisible)
   const dispatch = useDispatch()
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
            <ModalContent style={{width:"100%", height:400}}>
                <View>
                    <Text>Choose Your Location</Text>
                </View>
            </ModalContent>
        </BottomModal>
    )
}

export default AddressModal

const styles = StyleSheet.create({})