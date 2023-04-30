import React, { useState } from "react";
import { useEthers } from "@usedapp/core";
import { useSelector } from "react-redux";
import metamask from "../../assets/metamask.png";
import styles from "../../styles/sass/components/walletPanel.module.scss";

function ConnectedWallet() {
  const [isDropDown, setIsDropDown] = useState(false);
  const { deactivate } = useEthers();
  const dropDownHandler = () => {
    setIsDropDown((prev) => (prev = !prev));
  };

  const address = useSelector(({ web3 }) => web3.accountAddress);

  const disconnectHandler = async () => {
    const accounts = await window.ethereum
      .request({
        method: "wallet_requestPermissions",
        params: [
          {
            eth_accounts: {},
          },
        ],
      })
      .then(() =>
        window.ethereum.request({
          method: "eth_requestAccounts",
        })
      );
  };

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
            <li>
              <button onClick={disconnectHandler}>Disconnect</button>
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
}

export default ConnectedWallet;
