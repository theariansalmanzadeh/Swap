import React, { useEffect, useState, useRef, useMemo } from "react";
import styles from "../../styles/sass/layouts/swap.module.scss";
import SwapButton from "./SwapButton.js";
import ethLogo from "../../assets/ethereum.png";
import mtcLogo from "../../assets/matic.webp";
import { useDispatch, useSelector } from "react-redux";
import { getPriceToken, setInputAmount } from "../../features/tokenPriceSlice";
import DisplayPrices from "./DisplayPrices";
import {
  getPairs,
  getPriceSwap,
  setTokenPriceOut,
} from "../../features/sushiSwapSlice";
import {
  isObejctEmpty,
  listBestPrice,
  containsOnlyNumbers,
} from "../../utils/helper";

function SwapSection() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [Amount, setAmount] = useState(0);
  const [balanceError, setBalanceError] = useState(false);

  const dispatch = useDispatch();

  const tokeOutputBancor = useSelector(
    ({ bancorSwap }) => bancorSwap.tokenPriceOut
  );
  const tokeOutputSushi = useSelector(
    ({ sushiSwap }) => sushiSwap.tokenPriceSushi
  );
  const accountAddress = useSelector(({ web3 }) => web3.accountAddress);
  const provider = useSelector(({ web3 }) => web3.provider);

  const factoryContratSushi = useSelector(
    ({ sushiSwap }) => sushiSwap.sushiFactoryContract
  );

  const factoryInctance = useMemo(
    () => factoryContratSushi,
    [factoryContratSushi]
  );

  const inputRef = useRef(null);

  const changeInputHandler = async () => {
    if (Number(inputRef.current.value) === 0) {
      setBalanceError(false);
      dispatch(setInputAmount(0));
      dispatch(setTokenPriceOut("0"));
      return;
    }
    if (!containsOnlyNumbers(inputRef.current.value) || !isLoggedIn) {
      inputRef.current.value = "";
      return;
    }
    const input = Number(inputRef.current.value);

    await dispatch(getPriceToken(input)).unwrap();
    await dispatch(getPriceSwap(input)).unwrap();

    const balance = await provider.getBalance(accountAddress);

    balance < input && setBalanceError(true);

    setAmount(input);
  };

  useEffect(() => {
    if (accountAddress === "") {
      setIsLoggedIn(false);
      return;
    }
    setIsLoggedIn(true);
  }, [accountAddress]);

  useEffect(() => {
    if (isObejctEmpty(factoryInctance)) return;
    dispatch(getPairs()).unwrap();
  }, [factoryInctance, dispatch]);

  return (
    <div className={styles.swapSection}>
      <div className={styles.swapWrapper}>
        <h3>Swap</h3>
        <form>
          <div className={styles.swapInputWrapper}>
            <label>You pay</label>
            <div className={styles.inputContainer}>
              <input
                type="text"
                disabled={!isLoggedIn}
                onChange={changeInputHandler}
                ref={inputRef}
                placeholder="0.0ETH"
              />
              <div className={styles.tokenInfo}>
                <img src={ethLogo} alt="ethereum logo" />
                <p>ETH</p>
              </div>
            </div>
          </div>
          <div className={styles.swapInputWrapper}>
            <label>You receive</label>
            <div className={styles.inputContainer}>
              <input
                type="text"
                value={
                  inputRef === null || inputRef?.current?.value !== ""
                    ? listBestPrice(tokeOutputSushi, tokeOutputBancor)
                    : "-"
                }
                placeholder="0.0MTC"
              />
              <div className={styles.tokenInfo}>
                <img src={mtcLogo} alt="matic logo" />
                <p>MTC</p>
              </div>
            </div>
            {accountAddress !== "" && <DisplayPrices />}
          </div>
          <SwapButton
            balanceError={balanceError}
            value={Amount}
            isLoggedIn={isLoggedIn}
          />
        </form>
      </div>
    </div>
  );
}

export default SwapSection;
