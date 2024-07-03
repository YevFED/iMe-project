import React, { useState } from "react";
import styles from "./Auth.module.scss";
import Header from "../../components/Header/Header";
import Background from "../../components/background/Background";

const Auth = () => {
  const [side, setSide] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const changeSide = (side: boolean) => {
    setEmail("");
    setSide(!side);
    setPassword("");
    setUsername("");
  };

  const setUser = (user: string) => {
    setUsername(user);
  };
  return (
    <>
      <Background />
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.formWrapper}>
          {side ? (
            <>
              <div className={styles.blackBoxRight}>
                <p className={styles.formTitle}>Sign in</p>
              </div>
              <form action="" className={styles.FormLeft}>
                <input
                  type="text"
                  placeholder="Type your email :"
                  className={styles.formInput}
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Type your password :"
                  className={styles.formInput}
                  name="password"
                  value={password}
                  minLength={8}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className={styles.formButton}>
                  Sign In
                </button>
                <p
                  onClick={() => changeSide(side)}
                  className={styles.formChanger}
                >
                  Don't have account?
                </p>
              </form>
            </>
          ) : (
            <>
              <div className={styles.blackBoxLeft}>
                <p className={styles.formTitle}>
                  Sign up <br /> create a new accoount
                </p>
              </div>
              <form action="" className={styles.FormRight}>
                <input
                  type="email"
                  placeholder="Type your email :"
                  className={styles.formInput}
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Type your username :"
                  className={styles.formInput}
                  name="username"
                  value={username}
                  onChange={(e) => setUser(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Type your password :"
                  className={styles.formInput}
                  name="password"
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className={styles.formButton}>
                  Create account
                </button>
                <p
                  onClick={() => changeSide(side)}
                  className={styles.formChanger}
                >
                  Already have a account ?
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Auth;
