import { configureStore } from "@reduxjs/toolkit";
import { web3Slice } from "../features/web3Slice";
import { bancorSlice } from "../features/tokenPriceSlice";
import { sushiswapSlice } from "../features/sushiSwapSlice";

export const store = configureStore({
  reducer: {
    web3: web3Slice.reducer,
    bancorSwap: bancorSlice.reducer,
    sushiSwap: sushiswapSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
