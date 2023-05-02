import React from "react";
import styles from "../styles/sass/pages/homePage.module.scss";
import moon from "../assets/moon.png";
import astronaut from "../assets/astronaut.webp";

function HomePage() {
  return (
    <div className={styles.homePage}>
      <div className={styles.heading}>
        <h1>Vestiggator</h1>
        <p>A agreggator platform for swapping crypto tokens</p>
      </div>
      <div className={styles.imgWrapper}>
        <img src={moon} alt="" className={styles.moon} />
        <img src={astronaut} alt="" />
      </div>
    </div>
  );
}

export default HomePage;
