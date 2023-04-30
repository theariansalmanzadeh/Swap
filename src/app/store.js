import { configureStore } from "@reduxjs/toolkit";
import { web3Slice } from "../features/web3Slice";
import { tokenPriceFinder } from "../features/tokenPriceSlice";

export const store = configureStore({
  reducer: {
    web3: web3Slice.reducer,
    tokenPrice: tokenPriceFinder.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
