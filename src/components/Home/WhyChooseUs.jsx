import React from 'react'
import styles from './WhyChooseUs.module.css'
import homeaboutimg from "/assets/school_two.jpg"
import { BsChevronDoubleDown } from "react-icons/bs";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';
//   import 'react-accessible-accordion/dist/fancy-example.css';

const WhyChooseUs = () => {
  return (
    <div className={styles.why_choose_us} data-aos="fade-up" data-aos-once>
            <div className={styles.why_choose_us_img}>
              <img src={homeaboutimg} alt=""  loading='lazy' />
            </div>
            <div className={styles.why_choose_us_desc}>
              <h2>Why Choose Us</h2>
              <p>At The Green School International, we prioritize holistic education to nurture compassionate, empathetic, and environmentally conscious global citizens.</p>
              <div className={styles.why_choose_us_accordion}>
              <Accordion className={styles.accordion_container} allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className={styles.accordion_button}>
                    <p>Sustainability and Kindness</p>
                    <BsChevronDoubleDown size={20}/>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    We advocate for environmental preservation and instill kindness and empathy in our students. Through our curriculum and initiatives, we foster a deep appreciation for nature and the importance of sustainability.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className={styles.accordion_button}>
                    <p>Unique Sanskar Classes</p>
                    <BsChevronDoubleDown size={20}/>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Our Sanskar Classes are designed to instill strong moral values in our students. Through these classes, we impart principles of respect, honesty, and cooperation, shaping students into responsible and ethical individuals.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className={styles.accordion_button}>
                    <p>Focus on Mental Health and Happiness</p>
                    <BsChevronDoubleDown size={20}/>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    We prioritize the mental health and happiness of our students. Through comprehensive programs and support systems, we ensure that our students develop emotional intelligence and resilience, fostering a positive and nurturing learning environment.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className={styles.accordion_button}>
                    <p>Emphasis on Sports and Resilience</p>
                    <BsChevronDoubleDown size={20}/>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    We emphasize sports to promote physical health and cultivate essential life skills such as teamwork, perseverance, and sportsmanship. Our students are taught to embrace challenges and learn from failures, preparing them to tackle life's obstacles with confidence.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
              </div>
              <p>At The Green School International, we are committed to providing an education that goes beyond academics, empowering our students to thrive as compassionate, environmentally conscious, and well-rounded individuals.</p>
            </div>
          </div>
  )
}

export default WhyChooseUs