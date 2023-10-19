import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SliderBox } from 'react-native-image-slider-box'

const Carousel = () => {
    const [sliders, setSliders] = useState([])

    useEffect(() => {

        const slidersArray = [
            'https://themegenix.net/html/bemet/assets/img/gallery/gallery_img02.png',
            require('../assets/slider1.png'),
            'https://themegenix.net/html/bemet/assets/img/gallery/gallery_img01.png',
            require('../assets/slider2.png'),
            require('../assets/slider3.png')
        ]

        setSliders(slidersArray)
    }, [])

    return (
        <SliderBox
            images={sliders}
            sliderBoxHeight={200}
            autoPlay
            circleLoop
            dotColor='#F9906f'
            inactiveDotColor='white'
            ImageComponentStyle={{ width: '100%' }}
        />
    )
}

export default Carousel

const styles = StyleSheet.create({})