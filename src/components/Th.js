import React from "react";
import styles from "../styles/AtomComponents.module.css";

const Th = ({ children }) => {
  return <th className={styles["table-header"]}>{children}</th>;
};

export default Th;
