import React from "react";
import styles from "./Home.module.scss";
import background from "../../assets/backgorund.png";
import Header from "../../components/Header/Header";
import Background from "../../components/background/Background";
import Logo from '../../assets/Logo.png'

const Home = () => {
  return (
    <>
      <Background />
      <Header />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>rtrtrtr</h1>
        <img className= {styles.logo} src={Logo} alt="" />
      </div>
    </>
  );
};

export default Home;
