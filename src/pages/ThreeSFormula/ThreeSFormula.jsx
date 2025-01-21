import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import styles from './ThreeSFormula.module.css'
import Header from '../../components/Header/Header'

const ThreeSFormula = () => {
  return (
    <>
  
    <Header title='The 3S Formula'/>
    <section className={styles.container}>
      <div>
        <p className={styles.preheader}>The Green School International</p>
        <h2 className={styles.header}>Unlocking Academic Potential with the 3s Formula - </h2>
        <h2 className={styles.header}>Sports, Sanskar & Sustainibility</h2>
      </div>
      <div className={styles.cards}>
        <div className={styles.card} id='sports'>
          <div className={styles.card_header}>
            <img src="/assets/ThreeS/sports.svg" alt="" />
            <h3>Sports</h3>
          </div>
          <div className={styles.card_desc}>
              <img src="/assets/ThreeS/sports.jpg" alt="" />
              <p className={styles.card_text}>Sports are integral to holistic education, fostering physical fitness, teamwork, and discipline. Participation develops essential life skills like time management, goal-setting, and resilience. Moreover, sports enhance social skills, create a sense of belonging, and teach valuable lessons about gracious winning and losing. Overall, they instill a lifelong commitment to a healthy lifestyle, contributing significantly to a well-rounded and balanced education.</p>
          </div>
          <div></div>
        </div>

        <div className={styles.card} id='sanskar'>
          <div className={styles.card_header}>
            <img src="/assets/ThreeS/namaste.svg" alt="" />
            <h3>Sanskar</h3>
          </div>
          <div className={styles.card_desc}>
              <img src="/assets/ThreeS/sanskar.jpg" alt="" />
              <p className={styles.card_text}>Sanskar, cultural values, and ethical principles serve as a vital moral compass for intelligence. They provide the ethical foundation essential for responsible decision-making. Without these guiding principles, intelligence may lead to actions lacking ethical considerations, posing potential harm. Integrating Sanskar with intelligence ensures a holistic and responsible approach to life's complexities.</p>
          </div>
          <div></div>
        </div>


        <div className={styles.card} id='sustainibility'>
          <div className={styles.card_header}>
            <img src="/assets/ThreeS/go_green.svg" alt="" />
            <h3>Sustainibility</h3>
          </div>
          <div className={styles.card_desc}>
              <img src="/assets/ThreeS/sustainibility.jpg" alt="" />
              <p className={styles.card_text}>Integrating sustainability into the curriculum is vital for fostering responsible citizenship. Emphasizing critical thinking, the curriculum equips students to address global challenges and make ethical decisions, embracing the 3 R concept—Reduce, Reuse, Recycle. Beyond academic knowledge, it instills values for reducing waste, ensuring students actively contribute to a more environmentally conscious and interconnected world, ready to implement these principles in their daily lives.</p>
          </div>
          <div></div>
        </div>
      </div>
    </section>
   

    </>

  )
}

export default ThreeSFormula