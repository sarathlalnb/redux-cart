import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAllProducts = createAsyncThunk("product/fetchAllProducts",async ()=>{
    let {data}= await axios.get("https://dummyjson.com/products")
    console.log(data);
    return data;
},{})

const productSlice = createSlice({
  name: "product",
  initialState: { allProducts: [] },
  reducers:{
    // synchronous operation
  }
});
