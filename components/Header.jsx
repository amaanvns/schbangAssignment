import Image from "next/image";
import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header2}>
        <div className={styles.headerTitle}>
          <h1 className={styles.headerHead}>
            Discover Restaurant <br /> & Delicious Food
          </h1>
          <div className={styles.input}>
            <input type="text" placeholder="search restuarant food" />
            <button>Go</button>
          </div>
        </div>
        <div className={styles.headerImage}>
          <img src="/—Pngtree—delici.png" className={styles.image} />
          <img src="/—Pngtree—lettuc.png" className={styles.image1} />
        </div>
      </div>
      <div className={styles.locationInfo}>
        <div className={styles.location}>
          <img src="/placeholder.png" alt="" style={{ marginRight: "20px" }} />
          <p style={{ fontSize: "25px", color: "white" }}>Hyderabad</p>
        </div>
        <div className={styles.arrows}>
          <div>
            <img src="/Group 4.png" alt="" />
          </div>
          <div style={{ margin: "0px 30px" }}>
            <img src="/Group 3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
