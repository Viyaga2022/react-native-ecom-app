import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./redux/CartSlice";
import CommonSlice from "./redux/CommonSlice";

export default configureStore({
    reducer:{
        cart:CartSlice,
        common: CommonSlice,
    }
})