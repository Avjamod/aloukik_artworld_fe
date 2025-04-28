import { configureStore } from "@reduxjs/toolkit";
import homeDataReducer from "./homeDataSlice";
import serviceDataReducer from "./serviceDataSlice";
import themeReducer from "./themeSlice";
import serviceQuoteReducer from "./serviceQuoteSlice";

const appStore = configureStore({
  reducer: {
    homeData: homeDataReducer,
    serviceData: serviceDataReducer,
    theme: themeReducer,
    serviceQuote: serviceQuoteReducer,
  },
});

export default appStore;
