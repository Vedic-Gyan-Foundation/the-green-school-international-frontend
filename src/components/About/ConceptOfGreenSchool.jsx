import { motion } from "framer-motion";
import {
  FaLeaf,
  FaHandsHelping,
  FaHeartbeat,
  FaLightbulb,
  FaSeedling,
  FaUsers,
} from "react-icons/fa";
import styles from "./ConceptOfGreenSchool.module.css";
import { fadeUp, inViewProps } from "../../utils/motion";

const items = [
  {
    title: "Environmental Stewardship",
    body: "Promote a sense of responsibility for the environment among students, encouraging practices that minimize ecological impact.",
    Icon: FaLeaf,
  },
  {
    title: "Hands-On Learning",
    body: "Provide tangible experiences related to sustainability, allowing students to witness and participate in eco-friendly initiatives.",
    Icon: FaHandsHelping,
  },
  {
    title: "Health and Well-being",
    body: "Foster a healthier learning environment with natural elements, outdoor activities, and reduced exposure to harmful substances.",
    Icon: FaHeartbeat,
  },
  {
    title: "Long-Term Impact",
    body: "Educate students about the importance of sustainable living, aiming to create a generation that makes informed choices for the future.",
    Icon: FaSeedling,
  },
  {
    title: "Innovation",
    body: "Encourage the development and implementation of innovative, sustainable solutions, inspiring creative thinking about environmental challenges.",
    Icon: FaLightbulb,
  },
  {
    title: "Community Engagement",
    body: "Extend green practices beyond the school premises, involving the community in eco-friendly initiatives and a culture of sustainability.",
    Icon: FaUsers,
  },
];

const ConceptOfGreenSchool = () => {
  return (
    <motion.section
      {...inViewProps}
      variants={fadeUp}
      className={styles.about_concept}
    >
      <div className={styles.about_concept_head}>
        <span className="section-eyebrow">Our Concept</span>
        <h2>
          The concept of a <span className="gradient-text">green school</span>.
        </h2>
        <p>
          The Green School International, Guwahati concept stems from a growing
          awareness of environmental issues and a desire to instil
          sustainability values in education. By integrating eco-friendly
          practices, the concept aims to:
        </p>
      </div>
      <div className={styles.about_concept_desc}>
        {items.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className={styles.about_concept_card}
          >
            <div className={styles.icon_wrap}>
              <item.Icon size={22} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ConceptOfGreenSchool;
