import { ethers } from "ethers";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createContractSushiPool } from "../utils/helper";

const initialState = {
  maticAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  wethAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  wethReserve: "",
  maticReserve: "",
  reserveToken0: 0,
  reserveToken1: 0,
  inputAmount: 0,
  isLoading: false,
  tokenPriceSushi: "",
  sushiPoolAddress: "",
  sushiPoolContact: {},
  sushiFactoryContract: {},
  sushiRouterContract: {},
};

export const sushiswapSlice = createSlice({
  name: "tokenPriceFinderSushi",
  initialState,
  reducers: {
    setFactoryContract(state, action) {
      state.sushiFactoryContract = action.payload;
    },
    setRouterContract(state, action) {
      state.sushiRouterContract = action.payload;
    },
    setTokenPriceOut(state, action) {
      state.tokenPriceSushi = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getPairs.fulfilled, (state, action) => {
        state.sushiPoolAddress = action.payload.pairPool;
        console.log(action.payload);
        state.sushiPoolContact = action.payload.poolContract;
        state.reserveToken0 = action.payload._reserve0;
        state.reserveToken1 = action.payload._reserve1;
        state.isLoading = false;
      })
      .addCase(getPairs.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getPriceSwap.fulfilled, (state, action) => {
        state.tokenPriceSushi = action.payload;
        state.isLoading = false;
      })
      .addCase(getPriceSwap.pending, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const getPairs = createAsyncThunk(
  "sushiSwap/getPairs",
  async (_, { getState }) => {
    const { sushiFactoryContract, maticAddress, wethAddress } =
      getState().sushiSwap;

    const { provider } = getState().web3;

    const pairPool = await sushiFactoryContract.getPair(
      wethAddress,
      maticAddress
    );
    const poolContract = createContractSushiPool(pairPool, provider);

    let { _reserve0, _reserve1 } = await poolContract.getReserves();
    let token0 = await poolContract.token0();
    let token1 = await poolContract.token1();

    [_reserve0, _reserve1] =
      wethAddress === token0 ? [_reserve0, _reserve1] : [_reserve1, _reserve0];
    console.log("22");

    return { pairPool, poolContract, _reserve0, _reserve1 };
  }
);

export const getPriceSwap = createAsyncThunk(
  "sushiSwap/getReserves",
  async (inputAmount, { getState }) => {
    const { reserveToken0, reserveToken1, sushiRouterContract } =
      getState().sushiSwap;

    const amountOutPrice = await sushiRouterContract.getAmountOut(
      ethers.utils.parseEther(String(inputAmount)),
      reserveToken0,
      reserveToken1
    );
    const rawVal = ethers.utils.formatEther(String(amountOutPrice));
    return String(Number(rawVal).toFixed(3));
  }
);

export const { setTokenPriceOut, setFactoryContract, setRouterContract } =
  sushiswapSlice.actions;
