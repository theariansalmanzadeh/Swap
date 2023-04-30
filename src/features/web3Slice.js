import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ethers } from "ethers";

const chainID = 1;

const initialState = {
  accountAddress: "",
  signer: {},
  chainName: "",
  isLoading: false,
  isProvider: false,
  provider: {},
};

export const web3Slice = createSlice({
  name: "web3Slice",
  initialState,
  reducers: {
    setAddress(state, action) {
      state.accountAddress = action.payload;
    },
    setChainName(state, action) {
      state.chainName = action.payload;
    },
    setProvider(state, action) {
      state.provider = action.payload;
      state.isProvider = true;
      console.log(state.provider);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(connectToWallet.fulfilled, (state, action) => {
        state.accountAddress = action.payload.addressAccount[0];
        state.chainName = action.payload.chain;
        state.signer = action.payload.signer;
        console.log(action.payload);
        state.isLoading = false;
      })
      .addCase(connectToWallet.pending, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const { setProvider } = web3Slice.actions;

export const connectToWallet = createAsyncThunk(
  "web3/connectToWallet",
  async (provider) => {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const chain = await provider.getNetwork();
      console.log(`0x${chainID.toString(16)}`, chain.chainId);

      if (chain.chainId !== `0x${chainID.toString(16)}`)
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: `0x${chainID.toString(16)}` }],
        });

      const chainConnected = await provider.getNetwork();
      const addressAccount = await provider.listAccounts();

      const signer = provider.getSigner();
      console.log(signer, provider, addressAccount);

      return {
        chain,
        addressAccount,
        signer,
        chainConnected,
      };
    } catch (e) {
      console.log(e);
    }
  }
);
