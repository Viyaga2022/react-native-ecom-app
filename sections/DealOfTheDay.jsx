import { Pressable, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../components/Title'

const Offers = ({ image, offer }) => {
  return (
    <Pressable style={{ margin: 10 }}>
      <Image source={{ uri: image }} style={{borderRadius:10, resizeMode:"contain"}} width={150} height={150} />
      <Text style={{ marginTop:5, fontSize:16, fontWeight:500, textAlign:"center", padding:5, backgroundColor:"red", color:"white", borderRadius:5}}>Upto {offer} off</Text>
    </Pressable>
  )
}
const DealOfTheDay = () => {
  const [deals, setDeals] = useState([])

  useEffect(() => {
    
    const dealsArray = [
      { image: "https://w3meat.dexignzone.com/xhtml/assets/images/product/5.jpg", offer: "40%" },
      { image: "https://w3meat.dexignzone.com/xhtml/assets/images/product/2.jpg", offer: "25%" },
      { image: "https://w3meat.dexignzone.com/xhtml/assets/images/product/3.jpg", offer: "30%" },
      { image: "https://w3meat.dexignzone.com/xhtml/assets/images/product/5.jpg", offer: "40%" },
      { image: "https://w3meat.dexignzone.com/xhtml/assets/images/product/2.jpg", offer: "25%" },
    ]

    setDeals(dealsArray)

  }, [])

  return (
    <>
      <Title title={"Deal of the Day"} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        {deals.map((item, index) => {
          console.log(item.image)
          return (
            <Offers image={item.image} offer={item.offer} />
          )

        })}
      </ScrollView>
      <Text style={{ height:1, borderWidth:2, borderColor:"#D0D0D0", marginTop:15 }}></Text>
    </>
  )
}

export default DealOfTheDay

const styles = StyleSheet.create({})