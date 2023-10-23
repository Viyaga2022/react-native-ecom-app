import { Pressable, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../components/home/Title'
import { useNavigation } from '@react-navigation/native'

const Offers = ({ item }) => {
  const navication = useNavigation()
  const offer = Math.round(((item.oldPrice - item.price)/item.oldPrice) *100)
  return (
    <Pressable
      style={{ margin: 10 }}
      onPress={() => navication.navigate("ProductInfo", {
        item: item
      })}
    >
      <Image source={{ uri: item.image }} style={{ borderRadius: 10, resizeMode: "contain" }} width={150} height={150} />
      <Text style={{ marginTop: 5, fontSize: 16, fontWeight: 500, textAlign: "center", padding: 5, backgroundColor: "red", color: "white", borderRadius: 5 }}>Upto {offer}% off</Text>
    </Pressable>
  )
}
const DealOfTheDay = () => {
  const [deals, setDeals] = useState([])
  useEffect(() => {

    const dealsArray = [
      { id:1, title:"Beef Ribs", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quos cumque fugit autem, quae incidunt adipisci saepe velit animi eum quibusdam aspernatur aut quia soluta doloremque aliquam inventore? Ut, ratione!", oldPrice:4400, price:929, rating:4.7, image:"https://w3meat.dexignzone.com/xhtml/assets/images/product/5.jpg", offer: "40%" },
      { id:2, title:"Beef Steaks", description:"Maiores error delectus accusantium, dignissimos fuga, aut tempore perferendis maxime laboriosam blanditiis repellendus saepe possimus, vitae corporis vel. Dolor, doloremque. Dignissimos ex mollitia, pariatur", oldPrice:4400, price:929, rating:4.1, image:"https://w3meat.dexignzone.com/xhtml/assets/images/product/2.jpg", offer: "25%" },
      { id:3, title:"Organ Meats", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quos cumque fugit autem, quae incidunt adipisci saepe velit animi eum quibusdam aspernatur aut quia soluta doloremque aliquam inventore? Ut, ratione!", oldPrice:4400, price:929, rating:4.2, image:"https://w3meat.dexignzone.com/xhtml/assets/images/product/3.jpg", offer: "30%" },
      { id:4, title:"Mutton Curry", description:"Maiores error delectus accusantium, dignissimos fuga, aut tempore perferendis maxime laboriosam blanditiis repellendus saepe possimus, vitae corporis vel. Dolor, doloremque. Dignissimos ex mollitia, pariatur", oldPrice:4400, price:929, rating:3.7, image:"https://w3meat.dexignzone.com/xhtml/assets/images/product/5.jpg", offer: "40%" },
      { id:5, title:"HANGER STEAK", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quos cumque fugit autem, quae incidunt adipisci saepe velit animi eum quibusdam aspernatur aut quia soluta doloremque aliquam inventore? Ut, ratione!", oldPrice:4400, price:929, rating:4.3, image:"https://w3meat.dexignzone.com/xhtml/assets/images/product/2.jpg", offer: "25%" },
    ]
    setDeals(dealsArray)

  }, [])

  return (
    <>
      <Title title={"Deal of the Day"} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        {deals.map((item, index) => {
          return (
            <Offers key={index} item={item} />
          )

        })}
      </ScrollView>
      <Text style={{ height: 1, borderWidth: 2, borderColor: "#D0D0D0", marginTop: 15 }}></Text>
    </>
  )
}

export default DealOfTheDay

const styles = StyleSheet.create({})