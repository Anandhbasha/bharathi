import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "../Slices/productSlices";
import cartSlice from "../Slices/CartSlice";
import authSlice from "../Slices/authSlice";

const Store = configureStore({
    reducer:{
        Product:productSlice.reducer,
        Cart:cartSlice.reducer,
        Auth:authSlice.reducer
    }
})

export default Store