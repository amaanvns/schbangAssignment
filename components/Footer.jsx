import React from "react";
import styles from "../styles/Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.allInfo}>
        <div className={styles.app}>
          <div className={styles.redBox}></div>
          <div style={{ fontSize: "75px", color: "#2e266f", width: "70%" }}>
            Download app for Exciting Deals
          </div>
        </div>
        <div className={styles.info}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          quas sed itaque voluptatem nam animi repudiandae ab vitae nemo
          laudantium maiores, ipsam
        </div>
        <div className={styles.download}>
          <img src="/google-play-bad.png" alt="" />
          <img src="/2000px-Download.png" alt="" />
        </div>
      </div>
      <div>
        <div className={styles.imgContainer}>
          <img src="/Group 65.png" style={{width:'500px'}} alt="" />
          <img src="/5a1c7e70ca3fe7..png" alt="" />
        </div>
      </div>
    </div>
  );
};
