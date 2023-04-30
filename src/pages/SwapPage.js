import React from "react";
import styles from "../styles/sass/pages/swap.module.scss";
import SwapSection from "../components/swap/SwapSection.js";

function SwapPage() {
  return (
    <div className={styles.swapPage}>
      <SwapSection />
    </div>
  );
}

export default SwapPage;
