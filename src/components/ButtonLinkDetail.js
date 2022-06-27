import React from "react";
import styles from "../styles/AtomComponents.module.css";

const ButtonLinkDetail = ({ href, children }) => {
  return (
    <a
      className={styles["button-details"]}
      href={href}
      target="_blank"
      rel="noopenner noreferrer"
    >
      {children}
    </a>
  );
};

export default ButtonLinkDetail;
