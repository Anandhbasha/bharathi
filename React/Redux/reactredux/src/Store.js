import { configureStore } from "@reduxjs/toolkit";
import { countSlice } from "./Slices/Slice";

const store = configureStore({
    reducer:{
        changeCount:countSlice.reducer
    }
})

export default store