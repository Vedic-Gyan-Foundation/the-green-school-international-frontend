import { motion } from "framer-motion";
import { FaSmileBeam, FaRunning, FaGraduationCap } from "react-icons/fa";
import { GiThreeLeaves, GiMeditation } from "react-icons/gi";
import styles from "./OurUSPs.module.css";
import { fadeUp, inViewProps } from "../../utils/motion";

const usps = [
  {
    title: "The 3S Philosophy",
    tagline: "Sports · Sanskar · Sustainability",
    desc: "Our unique approach to developing strong, responsible and compassionate individuals.",
    Icon: GiThreeLeaves,
    accent: "from-brand-600 to-brand-900",
  },
  {
    title: "A Happiness-Focused School",
    tagline: "Belonging · Well-being · Joy",
    desc: "A happy child learns better, grows better and lives better. Happiness and emotional well-being are central to our education.",
    Icon: FaSmileBeam,
    accent: "from-sun-500 to-sun-700",
  },
  {
    title: "Healthy Body · Healthy Mind",
    tagline: "Fitness · Mindfulness · Yoga",
    desc: "We nurture both physical health and mental well-being through sports, fitness, mindfulness, yoga and healthy lifestyle practices.",
    Icon: GiMeditation,
    accent: "from-brand-500 to-brand-800",
  },
  {
    title: "Sports & Discipline",
    tagline: "Teamwork · Resilience · Leadership",
    desc: "Sports teaches children discipline, teamwork, resilience, leadership and the ability to handle both success and failure.",
    Icon: FaRunning,
    accent: "from-brand-700 to-brand-900",
  },
  {
    title: "Education for Life, Not Just Examinations",
    tagline: "Character · Creativity · Life Skills",
    desc: "We develop character, confidence, creativity, environmental responsibility and life skills alongside academic excellence.",
    Icon: FaGraduationCap,
    accent: "from-sun-600 to-brand-700",
  },
];

const OurUSPs = () => {
  return (
    <motion.section
      {...inViewProps}
      variants={fadeUp}
      className={styles.usps_section}
      aria-labelledby="our-usps-heading"
    >
      <div className={styles.section_header}>
        <span className="section-eyebrow">Our USPs</span>
        <h2 id="our-usps-heading" className={styles.section_title}>
          Five reasons families choose{" "}
          <span className="gradient-text">The Green School International</span>.
        </h2>
        <p className={styles.section_lead}>
          What sets us apart — a philosophy, a promise and a way of learning
          that shapes children for life.
        </p>
      </div>

      <div className={styles.usps_grid}>
        {usps.map((u, i) => (
          <motion.article
            key={u.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              delay: i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -6 }}
            className={styles.usp_card}
          >
            <div className={styles.usp_number}>0{i + 1}</div>
            <div
              className={`${styles.usp_icon} bg-gradient-to-br ${u.accent}`}
              aria-hidden="true"
            >
              <u.Icon size={24} />
            </div>
            <h3 className={styles.usp_title}>{u.title}</h3>
            <p className={styles.usp_tagline}>{u.tagline}</p>
            <p className={styles.usp_desc}>{u.desc}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default OurUSPs;
