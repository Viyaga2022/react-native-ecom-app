import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            const exists = state.cart.find((item) => item.id === action.payload.id)
            if (exists) {
                exists.quantity++
            } else {
                state.cart.push({ ...action.payload, quantity: 1 })
            }
        },
        increament: (state, action) => {
            const exists = state.cart.find((item) => item.id === action.payload.id)
            exists.quantity++
        },
        decrement: (state, action) => {
            const exists = state.cart.find((item) => item.id === action.payload.id)
            if (exists.quantity === 1) {
                exists.quantity = 0
                const removeItem = state.cart.filter((item) => item.id !== action.payload.id)
                state.cart = removeItem  // update cart
            } else {
                exists.quantity--
            }
        },
        deleteCateItem: (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload.id)
            state.cart = removeItem
        },
        clearCart: (state) => {
            state.cart = []
        },
    }
})

export const { addToCart, increament, decrement, deleteCateItem, clearCart } = CartSlice.actions
export default CartSlice.reducer