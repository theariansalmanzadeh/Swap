import React, { useEffect, useState, useRef } from "react";
import styles from "../../styles/sass/layouts/swap.module.scss";
import SwapButton from "./SwapButton.js";
import ethLogo from "../../assets/ethereum.png";
import mtcLogo from "../../assets/matic.webp";
import { useDispatch, useSelector } from "react-redux";
import { getPriceToken, setInputAmount } from "../../features/tokenPriceSlice";

function SwapSection() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [balanceError, setBalanceError] = useState(false);

  const dispatch = useDispatch();
  const tokeOutput = useSelector(({ tokenPrice }) => tokenPrice.tokenPriceOut);
  const accountAddress = useSelector(({ web3 }) => web3.accountAddress);
  const provider = useSelector(({ web3 }) => web3.provider);

  const inputRef = useRef();

  const swapHandler = () => {};

  function containsOnlyNumbers(str) {
    return /^(\d+.)*(\d+)$/.test(str);
  }

  const changeInputHandler = async () => {
    if (Number(inputRef.current.value) === 0) {
      setBalanceError(false);
      dispatch(setInputAmount(0));
      return;
    }
    if (!containsOnlyNumbers(inputRef.current.value) || !isLoggedIn) {
      inputRef.current.value = "";
      return;
    }
    const input = Number(inputRef.current.value);

    await dispatch(getPriceToken(input)).unwrap();

    const balance = await provider.getBalance(accountAddress);
    console.log(balance);
    balance < input && setBalanceError(true);
  };

  useEffect(() => {
    console.log(accountAddress === "");
    if (accountAddress === "") {
      setIsLoggedIn(false);
      return;
    }
    setIsLoggedIn(true);
  }, [accountAddress]);

  return (
    <div className={styles.swapSection}>
      <div className={styles.swapWrapper}>
        <h3>Swap</h3>
        <form onSubmit={swapHandler}>
          <div className={styles.swapInputWrapper}>
            <label>You pay</label>
            <div>
              <input
                type="text"
                disabled={!isLoggedIn}
                onChange={changeInputHandler}
                ref={inputRef}
                placeholder="0.0ETH"
              />
              <img src={ethLogo} alt="ethereum logo" />
            </div>
          </div>
          <div className={styles.swapInputWrapper}>
            <label>You receive</label>
            <div>
              <input type="text" value={tokeOutput} placeholder="0.0MTC" />
              <img src={mtcLogo} alt="ethereum logo" />
            </div>
            <SwapButton balanceError={balanceError} isLoggedIn={isLoggedIn} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SwapSection;
