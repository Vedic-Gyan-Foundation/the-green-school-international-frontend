import React from "react";
import styles from "./Header.module.css";
import { main } from "framer-motion/client";

const Header = ({ title, ActionButton, className }) => {
  // Combine base header class with optional className
  const headerClass = className
    ? `${styles.header} ${styles[className] || className}`
    : styles.header;
  return (
    <div className={headerClass}>
      <div className={styles.header_main}>
        <h2>{title}</h2>
        {ActionButton && <ActionButton />}
      </div>
    </div>
  );
};

export default Header;
