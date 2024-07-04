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
        
        <img className= {styles.logo} src={Logo} alt="" />
        <div>
        <p className= {styles.paragraph}> Smth to type</p>
        <p className= {styles.paragraph}>Smth to type</p>
        </div>
        <div className= {styles.button}>Join us</div>
      </div>
    </>
  );
};

export default Home;

