import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.headerLink}>
        link
      </Link>
      <Link to="/" className={styles.headerLink}>
        link
      </Link>
      <Link to="/" className={styles.headerLogo}>
        iMe
      </Link>
      <Link to="/signup" className={styles.headerLink}>
        Sign Up
      </Link>
      <Link to="/" className={styles.headerLink}>
        link
      </Link>
    </header>
  );
};

export default Header;
