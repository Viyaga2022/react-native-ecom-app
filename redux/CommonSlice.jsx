import { createSlice } from "@reduxjs/toolkit";

const CommonSlice = createSlice({
    name: "common",
    initialState: {
        AddressModalVisible: false,
    },
    reducers: {
        setAddressModalVisible: (state, action) => {
            if (state.AddressModalVisible !== action.payload) {
                state.AddressModalVisible = action.payload
            }
        }
    }
})

export const { setAddressModalVisible } = CommonSlice.actions
export default CommonSlice.reducer