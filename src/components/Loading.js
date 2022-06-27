import React from "react";
import styles from "../styles/Loading.module.css";

const Loading = () => {
  return (
    <div className={styles["loading"]}>
      <span className={styles["loading__title"]}>Masih Fetch Bro</span>
      <div className={styles["donut"]}></div>
    </div>
  );
};

export default Loading;
