import React from "react";
import { NavLink } from "react-router-dom";
import ConnectWallet from "./ConnectWallet.js";
import styles from "../../styles/sass/layouts/navbar.module.scss";

function NavBar() {
  const linkClasses = ({ isActive, isPending }) =>
    isActive ? `${styles.active} ` : "";

  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.links}>
        <NavLink className={linkClasses} to="/">
          Home
        </NavLink>
        <NavLink className={linkClasses} to="/swap">
          swap
        </NavLink>
      </div>
      <div>
        <ConnectWallet />
      </div>
    </div>
  );
}

export default NavBar;
