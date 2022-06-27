import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <ul className={styles["list"]}>
        <li>
          <Link className={styles["header__item"]} to="/">
            Magang
          </Link>
        </li>
        <li>
          <Link className={styles["header__item"]} to="/stupen">
            Studi Independent
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
