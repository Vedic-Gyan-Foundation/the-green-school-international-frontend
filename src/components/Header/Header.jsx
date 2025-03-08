import React from "react";
import styles from "./Header.module.css";
import { main } from "framer-motion/client";

const Header = ({ title, ActionButton }) => {
  return (
    <div className={[styles.header]}>
      <div className={styles.header_main}>
        <h2>{title}</h2>
        {ActionButton && <ActionButton />}
      </div>
    </div>
  );
};

export default Header;
