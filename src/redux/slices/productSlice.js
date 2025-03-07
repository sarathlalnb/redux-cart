import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    let { data } = await axios.get("https://dummyjson.com/products");
    return data.products;
  },
  {}
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    dummyAllProducts: [],
    loading: false,
    error: "",
  },
  reducers: {
    searchProducts: (state, valueFromHeader) => {
      state.allProducts = state.dummyAllProducts.filter((product) =>
        product.title.toLowerCase().includes(valueFromHeader.payload)
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, apiResult) => {
      (state.allProducts = apiResult.payload),
        ((state.dummyAllProducts = apiResult.payload), (state.loading = false)),
        (state.error = "");
    });
    builder.addCase(fetchAllProducts.pending, (state, apiResult) => {
      (state.allProducts = []),
        (state.dummyAllProducts = []),
        (state.loading = true),
        (state.error = "");
    });
    builder.addCase(fetchAllProducts.rejected, (state, apiResult) => {
      (state.allProducts = []),
        (state.dummyAllProducts = []),
        (state.loading = false),
        (state.error = "API Calling Failed, Please try again");
    });
  },
});



export const { searchProducts } = productSlice.actions; 
export default productSlice.reducer;
