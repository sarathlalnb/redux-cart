import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import singleproductSlice from "./slices/singleProductSlice";


const cartStore = configureStore({
    reducer : {
        productReducer : productSlice,
        singleProductReducer : singleproductSlice
    }
})

export default cartStore