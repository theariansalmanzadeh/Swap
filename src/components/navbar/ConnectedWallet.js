import React, { useState } from "react";
import { useSelector } from "react-redux";
import metamask from "../../assets/metamask.png";
import styles from "../../styles/sass/components/walletPanel.module.scss";

function ConnectedWallet() {
  const [isDropDown, setIsDropDown] = useState(false);

  const dropDownHandler = () => {
    setIsDropDown((prev) => (prev = !prev));
  };

  const address = useSelector(({ web3 }) => web3.accountAddress);

  return (
    <React.Fragment>
      <div className={styles.walletPanel} onClick={dropDownHandler}>
        <img
          src={metamask}
          alt="meta mask logo"
          className={styles.walletLogo}
        />
        <p>{address.slice(0, 4) + "..." + address.slice(-3)}</p>
      </div>
      {isDropDown && (
        <div className={styles.dropDown}>
          <ul>
            <li>ethereum mainnet</li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
}

export default ConnectedWallet;
