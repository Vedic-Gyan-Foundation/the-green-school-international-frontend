import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader_container}>
      <div className={styles.loader_wrap}>
        <div className={styles.ring} />
        <div className={styles.dot} />
        <p className={styles.label}>Loading…</p>
      </div>
    </div>
  );
};

export default Loader;
