import { motion } from "framer-motion";
import { highlights } from "../../data/highlights";
import styles from "./Highlights.module.css";
import Swal from "sweetalert2";
import { HiArrowLongRight } from "react-icons/hi2";
import { fadeUp, inViewProps } from "../../utils/motion";

const Highlights = () => {
  const readMoreHandler = (item) => {
    Swal.fire({
      title: `<strong>${item.title}</strong>`,
      html: `<p style="font-size: 15px; text-align: justify; line-height: 1.7;">${item.fulldesc}</p>`,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: `Got it`,
    });
  };
  return (
    <motion.section
      {...inViewProps}
      variants={fadeUp}
      className={styles.home_highlights}
    >
      <div className={styles.section_header}>
        <span className="section-eyebrow">Highlights</span>
        <h2>
          Programs that make us{" "}
          <span className="gradient-text">distinctly different</span>.
        </h2>
        <p>
          A curated mix of timeless wisdom and modern pedagogy — from Vedic
          Maths to SOF Olympiads — designed to unlock every learner&apos;s
          potential.
        </p>
      </div>

      <div className={styles.highlights_cards}>
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              delay: index * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -6 }}
            className={styles.highlight_card}
          >
            <div className={styles.icon_wrap}>
              <img src={item.icon} alt="" loading="lazy" />
            </div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
            <button
              type="button"
              className={styles.readMoreBtn}
              onClick={() => readMoreHandler(item)}
            >
              Read more <HiArrowLongRight />
            </button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Highlights;
