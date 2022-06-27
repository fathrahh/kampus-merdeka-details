import React from "react";
import styles from "../styles/AtomComponents.module.css";

const Td = ({ children }) => {
  return <td className={styles["table-list"]}>{children}</td>;
};

export default Td;
