import { motion } from "framer-motion";
import styles from "./WhyChooseUs.module.css";
import homeaboutimg from "/assets/school_two.jpg";
import { HiPlus } from "react-icons/hi2";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { fadeUp, inViewProps } from "../../utils/motion";

const items = [
  {
    title: "Sustainability and Kindness",
    body: "We advocate for environmental preservation and instill kindness and empathy in our students. Through our curriculum and initiatives, we foster a deep appreciation for nature and the importance of sustainability.",
  },
  {
    title: "Unique Sanskar Classes",
    body: "Our Sanskar Classes are designed to instill strong moral values in our students. Through these classes, we impart principles of respect, honesty, and cooperation, shaping students into responsible and ethical individuals.",
  },
  {
    title: "Focus on Mental Health and Happiness",
    body: "We prioritize the mental health and happiness of our students. Through comprehensive programs and support systems, we ensure that our students develop emotional intelligence and resilience, fostering a positive and nurturing learning environment.",
  },
  {
    title: "Emphasis on Sports and Resilience",
    body: "We emphasize sports to promote physical health and cultivate essential life skills such as teamwork, perseverance, and sportsmanship. Our students are taught to embrace challenges and learn from failures, preparing them to tackle life's obstacles with confidence.",
  },
];

const WhyChooseUs = () => {
  return (
    <motion.section
      {...inViewProps}
      variants={fadeUp}
      className={styles.why_choose_us}
    >
      <div className={styles.why_choose_us_img}>
        <div className={styles.image_frame}>
          <img
            src={homeaboutimg}
            alt="Students at The Green School"
            loading="lazy"
          />
        </div>
        <div className={styles.image_caption}>
          <p>Education that goes beyond academics</p>
        </div>
      </div>
      <div className={styles.why_choose_us_desc}>
        <span className="section-eyebrow">Why Choose Us</span>
        <h2>
          Built for the next generation of{" "}
          <span className="gradient-text">global citizens</span>.
        </h2>
        <p className={styles.lead}>
          At The Green School International, we prioritize holistic education to
          nurture compassionate, empathetic, and environmentally conscious
          global citizens.
        </p>
        <div className={styles.why_choose_us_accordion}>
          <Accordion
            className={styles.accordion_container}
            allowZeroExpanded
            preExpanded={["item-0"]}
          >
            {items.map((item, idx) => (
              <AccordionItem key={idx} uuid={`item-${idx}`}>
                <AccordionItemHeading>
                  <AccordionItemButton className={styles.accordion_button}>
                    <p>{item.title}</p>
                    <span className={styles.accordion_icon}>
                      <HiPlus size={18} />
                    </span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className={styles.accordion_panel}>
                  <p>{item.body}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <p className={styles.outro}>
          We are committed to providing an education that goes beyond academics
          — empowering students to thrive as compassionate, environmentally
          conscious, and well-rounded individuals.
        </p>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
