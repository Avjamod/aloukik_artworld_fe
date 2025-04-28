import { createSlice } from "@reduxjs/toolkit";

const serviceDataSlice = createSlice({
  name: "serviceData",
  initialState: null,
  reducers: {
    addServiceData: (state, action) => action.payload,
  },
});

export const { addServiceData } = serviceDataSlice.actions;
export default serviceDataSlice.reducer;
