import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import styles from "../../styles/sass/components/SwapBtn.module.scss";

function SwapButton({ isLoggedIn, balanceError, value }) {
  const isLoadingPrice = useSelector(({ bancorSwap }) => bancorSwap.isLoading);

  const accountAddress = useSelector(({ web3 }) => web3.accountAddress);
  const provider = useSelector(({ web3 }) => web3.provider);

  const swapHandler = async (e) => {
    e.preventDefault();
    const balance = await provider.getBalance(accountAddress);
    if (balance < value) return;
  };

  return (
    <button onClick={swapHandler} className={styles.swapBtn}>
      {isLoadingPrice && <CgSpinnerTwoAlt className={styles.loader} />}
      {!isLoggedIn && <span>connect wallet</span>}
      {balanceError && <span>not enough balance</span>}
      {isLoggedIn && !isLoadingPrice && <span>Swap</span>}
    </button>
  );
}

export default SwapButton;
