import { createSlice } from "@reduxjs/toolkit";

const homeDataSlice = createSlice({
  name: "homeData",
  initialState: null,
  reducers: {
    addData: (state, action) => action.payload,
  },
});

export const { addData } = homeDataSlice.actions;
export default homeDataSlice.reducer;
