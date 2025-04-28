import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: "light",
  reducers: {
    addtheme: (state, action) => action.payload,
  },
});

export const { addtheme } = themeSlice.actions;
export default themeSlice.reducer;
