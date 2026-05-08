import styles from "./Loader.module.css";
import logo from "/assets/logo.png";

const Loader = () => {
  return (
    <div className={styles.loader_container}>
      <div className={styles.loader_wrap}>
        <div className={styles.ring} aria-hidden="true" />
        <div className={styles.ring_two} aria-hidden="true" />
        <div className={styles.logo_disc}>
          <img src={logo} alt="The Green School International" />
        </div>
      </div>
      <p className={styles.label}>Loading…</p>
    </div>
  );
};

export default Loader;
