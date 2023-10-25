import { createSlice } from "@reduxjs/toolkit";

const CommonSlice = createSlice({
    name: "common",
    initialState: {
        userId: null,
        AddressModalVisible: false,
    },
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload
        },
        setAddressModalVisible: (state, action) => {
            if (state.AddressModalVisible !== action.payload) {
                state.AddressModalVisible = action.payload
            }
        },
    }
})

export const { setUserId, setAddressModalVisible } = CommonSlice.actions
export default CommonSlice.reducer