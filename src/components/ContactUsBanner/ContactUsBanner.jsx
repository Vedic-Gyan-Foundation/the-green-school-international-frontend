import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import Button from "../Button/Button";
import styles from "./ContactUsBanner.module.css";

const ContactUsBanner = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={styles.contact_us}
    >
      <div className={styles.bg_overlay} aria-hidden="true" />
      <div className={styles.glow_one} aria-hidden="true" />
      <div className={styles.glow_two} aria-hidden="true" />

      <div className={styles.contact_inner}>
        <div className={styles.contact_text}>
          <span className={styles.eyebrow}>Reach out · We are listening</span>
          <h2>Have any questions about our school?</h2>
          <p>
            Please feel free to contact us at your convenience. <br />
            We are eager to start a conversation about your child&apos;s future.
          </p>
        </div>
        <div className={styles.contact_action}>
          <Button
            variant="sun"
            clickHandler={() => navigate("/contact")}
            className="!px-6 !py-3.5 !text-base"
          >
            Contact Us
            <HiArrowLongRight />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUsBanner;
