import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import singleproductSlice from "./slices/singleProductSlice";
import wishlistSlice from "./slices/whishlistSlice"
import cartSlice from "./slices/cartSlice"

const cartStore = configureStore({
    reducer : {
        productReducer : productSlice,
        singleProductReducer : singleproductSlice,
        whishListReducer : wishlistSlice,
        cartReducer : cartSlice
    }
})

export default cartStore