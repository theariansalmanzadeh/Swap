import { ethers } from "ethers";
import { bancorAddress, abi } from "./BancorVariables";
import { sushiRouter, RouterABI } from "./sushiVariables";

export const getPools = async () => {
  const res = await fetch("https://api-v3.bancor.network/bnt");
  const pool = await res.json();
  console.log(pool);
};

export const createContractBancor = (provider) => {
  const bancorContract = new ethers.Contract(bancorAddress, abi, provider);
  console.log(bancorContract);
  return bancorContract;
};

export const createContractSushi = (provider) => {
  const sushiContract = new ethers.Contract(sushiRouter, RouterABI, provider);
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
  // console.log(Number(ethers.utils.parseUnits(String(res))));
  console.log(Number(res));
};
