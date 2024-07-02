import React from "react";
import styles from "./Home.module.scss";
import background from "../../assets/backgorund.png";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
    </div>
  );
};

export default Home;
