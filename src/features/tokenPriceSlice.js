import { ethers } from "ethers";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  outPutTokenAddress: "",
  inputAmount: 0,
  isLoading: false,
  tokenPriceOut: "",
  BancorContract: {},
};

export const bancorSlice = createSlice({
  name: "tokenPriceFinder",
  initialState,
  reducers: {
    setContract(state, action) {
      state.BancorContract = action.payload;
    },
    setInputAmount(state, action) {
      state.tokenPriceOut = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getPriceToken.fulfilled, (state, action) => {
        state.tokenPriceOut = action.payload;
        state.isLoading = false;
        console.log(action.payload);
      })
      .addCase(getPriceToken.pending, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const getPriceToken = createAsyncThunk(
  "token/getPriceToken",
  async (inputAmount, { getState }) => {
    const { BancorContract } = getState().bancorSwap;
    console.log(BancorContract, inputAmount);

    const res = await BancorContract.tradeOutputBySourceAmount(
      "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
      ethers.utils.parseEther(String(inputAmount))
    );

    console.log(res);
    const rawVal = ethers.utils.formatEther(String(res));
    return String(Number(rawVal).toFixed(3));
  }
);

export const { setContract, setInputAmount } = bancorSlice.actions;
