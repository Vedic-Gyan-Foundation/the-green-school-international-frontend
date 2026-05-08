import { motion } from "framer-motion";
import styles from "./ThreeSFormula.module.css";
import Header from "../../components/Header/Header";
import { fadeUp, fadeRight, fadeLeft, inViewProps } from "../../utils/motion";
import ContactUsBanner from "../../components/ContactUsBanner/ContactUsBanner";

const cards = [
  {
    id: "sports",
    title: "Sports",
    icon: "/assets/ThreeS/sports.svg",
    image: "/assets/ThreeS/sports.jpg",
    color: "from-brand-700 to-brand-900",
    description:
      "Sports are integral to holistic education, fostering physical fitness, teamwork, and discipline. Participation develops essential life skills like time management, goal-setting, and resilience. Moreover, sports enhance social skills, create a sense of belonging, and teach valuable lessons about gracious winning and losing. Overall, they instill a lifelong commitment to a healthy lifestyle, contributing significantly to a well-rounded and balanced education.",
    accent: "Physical Vitality · Resilience · Teamwork",
  },
  {
    id: "sanskar",
    title: "Sanskar",
    icon: "/assets/ThreeS/namaste.svg",
    image: "/assets/ThreeS/sanskar.jpg",
    color: "from-sun-500 to-sun-700",
    description:
      "Sanskar — cultural values and ethical principles — serves as a vital moral compass for intelligence. They provide the ethical foundation essential for responsible decision-making. Without these guiding principles, intelligence may lead to actions lacking ethical considerations, posing potential harm. Integrating Sanskar with intelligence ensures a holistic and responsible approach to life's complexities.",
    accent: "Values · Wisdom · Empathy",
  },
  {
    id: "sustainibility",
    title: "Sustainibility",
    icon: "/assets/ThreeS/go_green.svg",
    image: "/assets/ThreeS/sustainibility.jpg",
    color: "from-brand-500 to-brand-800",
    description:
      "Integrating sustainability into the curriculum is vital for fostering responsible citizenship. Emphasising critical thinking, the curriculum equips students to address global challenges and make ethical decisions, embracing the 3 R concept — Reduce, Reuse, Recycle. Beyond academic knowledge, it instills values for reducing waste, ensuring students actively contribute to a more environmentally conscious and interconnected world.",
    accent: "Eco-mindset · Reduce · Reuse · Recycle",
  },
];

const ThreeSFormula = () => {
  return (
    <>
      <Header title="The 3S Formula" />
      <section className={styles.container}>
        <motion.div
          {...inViewProps}
          variants={fadeUp}
          className={styles.intro}
        >
          <span className="section-eyebrow">The Green School International</span>
          <h2 className={styles.header}>
            Unlocking academic potential with the 3S formula —{" "}
            <span className="gradient-text">
              Sports, Sanskar &amp; Sustainibility
            </span>
            .
          </h2>
          <p className={styles.intro_lead}>
            A blueprint for holistic learning that balances physical strength,
            cultural wisdom and ecological awareness — three forces shaping
            every Eco Champ.
          </p>
        </motion.div>

        <div className={styles.cards}>
          {cards.map((card, idx) => (
            <motion.article
              key={card.id}
              id={card.id}
              {...inViewProps}
              variants={fadeUp}
              className={`${styles.card} ${
                idx % 2 === 1 ? styles.card_reverse : ""
              } scroll-mt-nav`}
            >
              <motion.div
                variants={idx % 2 === 1 ? fadeLeft : fadeRight}
                className={styles.card_header}
              >
                <div
                  className={`${styles.icon_wrap} bg-gradient-to-br ${card.color}`}
                >
                  <img src={card.icon} alt={card.title} />
                </div>
                <h3>{card.title}</h3>
                <span className={styles.accent}>{card.accent}</span>
                <span className={styles.number}>0{idx + 1}</span>
              </motion.div>
              <motion.div
                variants={idx % 2 === 1 ? fadeRight : fadeLeft}
                className={styles.card_desc}
              >
                <div className={styles.image_frame}>
                  <img src={card.image} alt={card.title} />
                  <div className={styles.image_overlay} />
                </div>
                <p className={styles.card_text}>{card.description}</p>
              </motion.div>
            </motion.article>
          ))}
        </div>

        <ContactUsBanner />
      </section>
    </>
  );
};

export default ThreeSFormula;
