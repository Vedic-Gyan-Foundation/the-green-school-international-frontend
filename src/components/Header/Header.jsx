import { motion } from "framer-motion";
import styles from "./Header.module.css";

const Header = ({ title, ActionButton, className }) => {
  const headerClass = className
    ? `${styles.header} ${styles[className] || className}`
    : styles.header;

  return (
    <div className={headerClass}>
      <div className={styles.header_overlay} />
      <div className={styles.header_decor_one} aria-hidden="true" />
      <div className={styles.header_decor_two} aria-hidden="true" />

      <motion.div
        className={styles.header_main}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className={styles.header_eyebrow}>
          The Green School International
        </span>
        <h2>
          <span className="gradient-text-sun">{title}</span>
        </h2>
        <span className={styles.header_underline} />
        {ActionButton && (
          <div className={styles.header_action}>
            <ActionButton />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Header;
