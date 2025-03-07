import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProductById = createAsyncThunk(
    "product/fetchProductById",
    async (id) => {
      let { data } = await axios.get(`https://dummyjson.com/products/${id}`);
      return data;
    },
    {}
  );

const singleproductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    product: [],
    loading: false,
    error: "",
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductById.fulfilled, (state, apiResult) => {
      (state.product = apiResult.payload),
      (state.loading = false),
        (state.error = "");
    });
    builder.addCase(fetchProductById.pending, (state, apiResult) => {
      (state.product = []),
        (state.loading = true),
        (state.error = "");
    });
    builder.addCase(fetchProductById.rejected, (state, apiResult) => {
      (state.product = []),
        (state.loading = false),
        (state.error = "API Calling Failed, Please try again");
    });
  },
});


export default singleproductSlice.reducer