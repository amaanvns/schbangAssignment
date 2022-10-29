import Image from "next/image";
import React from "react";
import styles from "../styles/Navbar.module.css";



const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.items}>
        <li><Image src='/logo.png' alt="" width={155} height={51}/></li>
        <li>Menu One</li>
        <li>Menu Two</li>
        <li>Menu Three</li>
        <li>Menu Four</li>
      </ul>
      <div className={styles.user}>
        <img src="/Userpic.png" alt="user" />
        <p style={{color:"white",marginLeft:"10px"}}>User</p>
      </div>
    </div>
  );
};

export default Navbar;
