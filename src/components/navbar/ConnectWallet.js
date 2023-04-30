import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { connectToWallet, setProvider } from "../../features/web3Slice.js";
import { setContract } from "../../features/tokenPriceSlice.js";
import ConnectedWallet from "./ConnectedWallet.js";
import LoadingWallet from "../loadingWallet/LoadingWallet.js";
import { createContractBancor } from "../../utils/helper.js";
import { BiWalletAlt } from "react-icons/bi";
import styles from "../../styles/sass/components/walletBtn.module.scss";

function ConnectWallet() {
  const [isWallet, setIsWallet] = useState(false);

  const dispatch = useDispatch();
  const isLoadingConnect = useSelector(({ web3 }) => web3.isLoading);
  const signer = useSelector(({ web3 }) => web3.signer);

  const connectWalletHandler = async () => {
    if (!window.ethereum) {
      alert("no wallet found");
      return;
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    try {
      dispatch(setProvider(provider));
      await dispatch(connectToWallet(provider)).unwrap();

      const contract = createContractBancor(provider);
      dispatch(setContract(contract));
      setIsWallet(true);
    } catch (e) {
      setIsWallet(false);
    }
  };

  return (
    <div>
      {isLoadingConnect && <LoadingWallet />}
      {!isWallet && (
        <button className={styles.walletBtn} onClick={connectWalletHandler}>
          <BiWalletAlt />
          connect
        </button>
      )}
      {isWallet && <ConnectedWallet />}
    </div>
  );
}

export default ConnectWallet;
