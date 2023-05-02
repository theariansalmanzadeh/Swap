import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PriceLoader from "../swap/PriceLoader.js";
import styles from "../../styles/sass/components/prices.module.scss";
import { getPairs, getPriceSwap } from "../../features/sushiSwapSlice.js";
import { getPriceToken } from "../../features/tokenPriceSlice.js";

function DisplayPrices() {
  const dispatch = useDispatch();

  const tokenPriceBancor = useSelector(
    ({ bancorSwap }) => bancorSwap.tokenPriceOut
  );
  const tokenPriceSushi = useSelector(
    ({ sushiSwap }) => sushiSwap.tokenPriceSushi
  );
  const isLoadingBancor = useSelector(({ bancorSwap }) => bancorSwap.isLoading);
  const isLoadingSushi = useSelector(({ sushiSwap }) => sushiSwap.isLoading);
  const reserveToken0 = useSelector(({ sushiSwap }) => sushiSwap.reserveToken0);

  useEffect(() => {
    (async () => {
      if (reserveToken0 === 0) return;
      await dispatch(getPriceSwap(1)).unwrap();
      await dispatch(getPriceToken(1)).unwrap();
    })();
  }, [dispatch, reserveToken0]);

  return (
    <div className={styles.pricesWrapper}>
      {(isLoadingSushi || isLoadingBancor) && <PriceLoader />}
      <div className={styles.priceBox}>
        <p>Bancor : 1 ETH =</p>
        <span>{tokenPriceBancor}MTC</span>
      </div>
      <div className={styles.priceBox}>
        <p>SushiSwap : 1 ETH =</p>
        <span>{tokenPriceSushi}MTC</span>
      </div>
    </div>
  );
}

export default DisplayPrices;
