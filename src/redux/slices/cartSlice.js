import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, data) => {
      const existingProduct = state.find((val) => val.id == data.payload.id);
      if (existingProduct) {
        existingProduct.quantity++;
        existingProduct.totalPrice =
          existingProduct.price * existingProduct.quantity;
          const remainingProducts = state.filter((val)=>val.id!==existingProduct.id)
         state = [...remainingProducts,existingProduct]
      } else {
        state.push({
          ...data.payload,
          quantity: 1,
          totalPrice: data.payload.price,
        });
      }
    },
    decrementItem: (state, data) => {
      const existingProduct = state.find((val) => val.id == data.payload.id);
      if (existingProduct) {
        existingProduct.quantity--;
        existingProduct.totalPrice =
          existingProduct.price * existingProduct.quantity;
          const remainingProducts = state.filter((val)=>val.id!==existingProduct.id)
         state = [...remainingProducts,existingProduct]
      } else {
        state.push({
          ...data.payload,
          quantity: 1,
          totalPrice: data.payload.price,
        });
      }
    },
    removeItem:(state,dataFromCart)=>{
      return state.filter((val)=>val.id!=dataFromCart.payload)
    },
    emptyCart:(state)=>{
      return []
    }
  },
});

export const {addToCart,decrementItem,removeItem,emptyCart} = cartSlice.actions

export default cartSlice.reducer;
