import { motion } from "framer-motion";
import styles from "./History.module.css";
import { fadeUp, inViewProps } from "../../utils/motion";

const items = [
  {
    title: "Founding Principles",
    body: "In 2018, we embarked on a mission to empower children's growth by fostering physical vitality, nurturing creative intellects, and instilling a commitment to excellence in all endeavors. Above all, our goal is to cultivate the happiness of every child.",
  },
  {
    title: "Vision",
    body: "Our vision is to endeavor to hold the position of the most sought-after School in Guwahati. This vision led to the birth of The Green School International.",
  },
  {
    title: "Establishment",
    body: "Founded in 2018 in Guwahati, The Green School International has rapidly grown to become one of the city's most sought-after schools.",
  },
  {
    title: "Innovative Approaches",
    body: "From the best sports infrastructure to being the first paper-free classroom school from 11th grade onwards. Our 3S Formula — unlocking academic potential through Sports, Sanskar, and Sustainability — sets us apart.",
  },
  {
    title: "Research-Based Approach",
    body: "We are committed to a research-based approach — a child-centered curriculum, engaging teaching methods, and personalized assessment that make learning intriguing, involving, and motivating.",
  },
  {
    title: "Educational Excellence",
    body: "In Guwahati, The Green School International has carved a niche for itself among the city's finest educational institutions, offering an exceptional learning environment where history is not just learned but actively shaped.",
  },
];

const History = () => {
  return (
    <motion.section
      {...inViewProps}
      variants={fadeUp}
      className={styles.about_history}
    >
      <div className={styles.glow_one} aria-hidden="true" />
      <div className={styles.glow_two} aria-hidden="true" />
      <div className={styles.history_inner}>
        <div className={styles.history_header}>
          <span className={styles.eyebrow}>Our story · Since 2018</span>
          <h2>Our school history</h2>
          <p>
            “We are not makers of History. We are made by History.” — Martin
            Luther King Jr. At The Green School International, our educational
            philosophy is deeply influenced by this profound quote.
          </p>
        </div>
        <div className={styles.history_desc}>
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className={styles.history_card}
            >
              <span className={styles.history_number}>0{idx + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default History;
