import React from "react";
import styles from "../../styles/sass/layouts/loadingWallet.module.scss";
import { CgSpinnerTwoAlt } from "react-icons/cg";

function LoadingModal() {
  console.log("ok");
  return (
    <div className={styles.WalletLoadingLayout}>
      <CgSpinnerTwoAlt className={styles.loader} />
    </div>
  );
}

export default LoadingModal;
