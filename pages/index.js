import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.gradientBackground}>
        <Navbar />
        <Header />
      </div>
      <Main />
      <Footer />
    </>
  );
}
