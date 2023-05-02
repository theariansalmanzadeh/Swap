import { ethers } from "ethers";
import { bancorAddress, abi } from "./BancorVariables";
import {
  sushiRouter,
  RouterABI,
  factoryContract,
  PoolABI,
  FacotyABI,
} from "./sushiVariables";

export const createContractBancor = (provider) => {
  const bancorContract = new ethers.Contract(bancorAddress, abi, provider);
  console.log(bancorContract);
  return bancorContract;
};

export const createContractSushiRouter = (provider) => {
  const sushiContract = new ethers.Contract(sushiRouter, RouterABI, provider);
  console.log(sushiContract);
  return sushiContract;
};
export const createContractSushiFactory = (provider) => {
  const sushiContract = new ethers.Contract(
    factoryContract,
    FacotyABI,
    provider
  );
  console.log(sushiContract);
  return sushiContract;
};
export const createContractSushiPool = (poolAddress, provider) => {
  const sushiContract = new ethers.Contract(poolAddress, PoolABI, provider);
  console.log(sushiContract);
  return sushiContract;
};

export const getPriceSushi = async (sushiContract, signer, address) => {
  const res = await sushiContract
    .connect(signer)
    .callStatic.swapExactETHForTokens(
      0,
      ["0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0"],
      address,
      0,
      {
        value: ethers.utils.parseEther(String(1)),
      }
    );
  console.log(Number(res));
};

export const getPriceBancor = async (bancorContract, signer) => {
  const res = await bancorContract
    .connect(signer)
    .tradeOutputBySourceAmount(
      "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
      1
    );

  console.log(Number(res));
};

export const isObejctEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const containsOnlyNumbers = (str) => {
  return /^(\d+.)*(\d+)$/.test(str);
};

export const listBestPrice = (...prices) => {
  return prices.sort((a, b) => parseFloat(b) - parseFloat(a))[0];
};
