import React from "react";
import { useSelector } from "react-redux";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import styles from "../../styles/sass/components/SwapBtn.module.scss";

function SwapButton({ isLoggedIn, balanceError }) {
  const isLoadingPrice = useSelector(({ tokenPrice }) => tokenPrice.isLoading);

  const swapHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <button onClick={swapHandler} className={styles.swapBtn}>
      {isLoadingPrice && <CgSpinnerTwoAlt className={styles.loader} />}
      {!isLoggedIn && <span>connect wallet</span>}
      {balanceError && <span>not enough balance</span>}
      {isLoggedIn && !isLoadingPrice && <span>SwapButton</span>}
    </button>
  );
}

export default SwapButton;
