import { configureStore } from "@reduxjs/toolkit";
import productStatusReducer from "../Slices/ProductStatusSlice"

export const store = configureStore({
    reducer: {
        productStatus:productStatusReducer
    }
})