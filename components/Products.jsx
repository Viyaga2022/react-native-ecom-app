import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'

import ProductBox from './ProductBox'
import DropDownPicker from 'react-native-dropdown-picker'

const Products = () => {
  const [products, setProducts] = useState([])
  const [open, setOpen] = useState(false)
  const [category, setCategory] = useState("all products")
  const [items, setItems] = useState([
    { label: "All Products", value: "all products" },
    { label: "Mutton", value: "mutton" },
    { label: "Chicken", value: "chicken" },
    { label: "Duck", value: "duck" },
    { label: "Pork", value: "pork" }
  ])
  console.log({ products });
  const onGenderOpen = useCallback(() => {
    setCompanyOpen(false)
  }, [])

  useEffect(() => {
    const productsArray = [
      { image: "https://z.commonsupport.com/corvex/wp-content/uploads/2021/02/shop-1.jpg", title: "Beef Ribs", price: 799, rating: 4.5, category: "mutton" },
      { image: "https://z.commonsupport.com/corvex/wp-content/uploads/2021/02/shop-2.jpg", title: "Beef Steaks", price: 1298, rating: 4.7, category: "mutton" },
      { image: "https://z.commonsupport.com/corvex/wp-content/uploads/2021/02/shop-3.jpg", title: "Organ Meats", price: 1129, rating: 3.8, category: "chicken" },
      { image: "https://z.commonsupport.com/corvex/wp-content/uploads/2021/02/shop-4.jpg", title: "Mutton Curry", price: 999, rating: 4.9, category: "chicken" },
      { image: "https://demoapus-wp.com/butcher/butcher-meat/wp-content/uploads/2016/10/blog03.jpg", title: "Korem Ipsum Dolor Sit Amet Consect.", price: 799, rating: 4.5, category: "pork" },
      { image: "https://demoapus-wp.com/butcher/butcher-meat/wp-content/uploads/2016/10/blog05.jpg", title: "Aliquam Neetus Vitae Diamrnare Cursus Sit", price: 1298, rating: 4.7, category: "pork" },
      { image: "https://demoapus-wp.com/butcher/butcher-meat/wp-content/uploads/2016/10/blog01.jpg", title: "Organ Meats", price: 1129, rating: 3.8, category: "duck" },
      { image: "https://demoapus-wp.com/butcher/butcher-meat/wp-content/uploads/2016/06/blog16.jpg", title: "HANGER STEAK", price: 999, rating: 4.9, category: "mutton" },
      { image: "https://z.commonsupport.com/corvex/wp-content/uploads/2021/02/shop-1.jpg", title: "Beef Ribs", price: 799, rating: 4.5, category: "mutton" },
      { image: "https://z.commonsupport.com/corvex/wp-content/uploads/2021/02/shop-2.jpg", title: "Beef Steaks", price: 1298, rating: 4.7, category: "mutton" },
      { image: "https://z.commonsupport.com/corvex/wp-content/uploads/2021/02/shop-3.jpg", title: "Organ Meats", price: 1129, rating: 3.8, category: "chicken" },
      { image: "https://z.commonsupport.com/corvex/wp-content/uploads/2021/02/shop-4.jpg", title: "Mutton Curry", price: 999, rating: 4.9, category: "chicken" },
      { image: "https://demoapus-wp.com/butcher/butcher-meat/wp-content/uploads/2016/10/blog03.jpg", title: "Korem Ipsum Dolor Sit Amet Consect.", price: 799, rating: 4.5, category: "pork" },
      { image: "https://demoapus-wp.com/butcher/butcher-meat/wp-content/uploads/2016/10/blog05.jpg", title: "Aliquam Neetus Vitae Diamrnare Cursus Sit", price: 1298, rating: 4.7, category: "pork" },
      { image: "https://demoapus-wp.com/butcher/butcher-meat/wp-content/uploads/2016/10/blog01.jpg", title: "Organ Meats", price: 1129, rating: 3.8, category: "duck" },
      { image: "https://demoapus-wp.com/butcher/butcher-meat/wp-content/uploads/2016/06/blog16.jpg", title: "HANGER STEAK", price: 999, rating: 4.9, category: "mutton" }
    ]

    setProducts(productsArray)
  }, [])

  return (
    <>
      <View style={{
        marginTop: 20,
        marginRight: 20,
        marginHorizontal: 10,
        width: "45%",
        marginBottom: open ? 50 : 15,
      }}>
        <DropDownPicker
          style={{
            borderColor: "#B7B7B7",
            height: 30,
            marginBottom: open ? items.length * 30 : 15,
          }}
          open={open}
          value={category}
          items={items}
          setOpen={setOpen}
          setValue={setCategory}
          setItems={setItems}
          placeholder="All Products"
          placeholderStyle={{}}
          //onOpen={onGenderOpen}
          zIndex={3000}
          zIndexInverse={1000}
        />
      </View>
      <View style={{ marginTop: 10, flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
        {products.filter((item) => (category === "all products") ? true : item.category === category).map((item, index) => {
          return (
            <ProductBox key={index} item={item} />
          )
        })}
      </View>
    </>

  )
}

export default Products

const styles = StyleSheet.create({})