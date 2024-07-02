import React from "react";
import background from "../../assets/backgound.png";
import styles from "./Background.module.scss";
export default function Background() {
  return (
    <div className={styles.wrapper}>
      <img
        src={background}
        alt="background"
        className={styles.backgroundImage}
      />
    </div>
  );
}
