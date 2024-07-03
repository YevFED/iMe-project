import React from "react";
import styles from "./Home.module.scss";
import background from "../../assets/backgorund.png";
import Header from "../../components/Header/Header";
import Background from "../../components/background/Background";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Background />
      <Header />
    </div>
  );
};

export default Home;
