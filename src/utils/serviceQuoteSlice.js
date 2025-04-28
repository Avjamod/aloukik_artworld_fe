import { createSlice } from "@reduxjs/toolkit";

const serviceQuoteSlice = createSlice({
  name: "serviceQuote",
  initialState: null,
  reducers: {
    addServiceQuote: (state, action) => action.payload,
  },
});

export const { addServiceQuote } = serviceQuoteSlice.actions;
export default serviceQuoteSlice.reducer;
