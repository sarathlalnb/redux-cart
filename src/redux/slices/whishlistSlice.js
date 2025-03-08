import { createSlice } from "@reduxjs/toolkit";

const whishlistSlice = createSlice({
  name: "whishlist",
  initialState: [],
  reducers: {
    addToWhishList: (state, dataFromView) => {
      state.push(dataFromView.payload);
    },
    removeWhishListItem: (state, dataFromView) => {

      return state.filter((val) => val.id != dataFromView.payload.id);
    },
  },
});

export const { addToWhishList, removeWhishListItem } = whishlistSlice.actions;
export default whishlistSlice.reducer;
