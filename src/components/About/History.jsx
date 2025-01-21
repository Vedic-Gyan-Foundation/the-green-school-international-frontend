import React from 'react'
import styles from './History.module.css'
const History = () => {
  return (
    <div className={styles.about_history} data-aos="fade-up" data-aos-once>
            <div className={styles.history_header}>
                <h2>Our School History</h2>  
                <p>“We are not makers of History. We are made by History.” – Martin Luther King Jr. At The Green School International, our educational philosophy is deeply influenced by this profound quote.</p>      
            </div>
            <div className={styles.history_desc}>
                <div className={styles.history_card}>
                    <h3>1. Founding Principles</h3>
                    <p>In 2018, we embarked on a mission to empower children's growth by fostering physical vitality, nurturing creative intellects, and instilling a commitment to excellence in all endeavors. Above all, our goal is to cultivate the happiness of every child.</p>
                </div>
                <div className={styles.history_card}>
                    <h3>2. Vision</h3>
                    <p>Our vision is to endeavor to hold the position of the most sought-after School in Guwahati. This vision led to the birth of The Green School International.</p>
                </div>
                <div className={styles.history_card}>
                    <h3>3. Establishment</h3>
                    <p>Founded in 2018 in Guwahati, The Green School International has rapidly grown to become one of the city's most sought-after schools.</p>
                </div>
                <div className={styles.history_card}>
                    <h3>4. Innovative Approaches</h3>
                    <p>Our institution is making its presence felt in the educational landscape with innovative approaches, from having the best sports infrastructure schools to being the first paper-free classroom school from 11th grade onwards. Additionally, our 3S Formula - unlocking academic potential through Sports, Sanskar, and Sustainability - sets us apart.</p>
                </div>
                <div className={styles.history_card}>
                    <h3>5. Research-Based Approach</h3>
                    <p>We are committed to a research-based approach, which creates a conducive learning environment, employs a child-centered curriculum, utilizes engaging teaching methods, and implements personalized assessment to make learning intriguing, involving, and motivating.</p>
                </div>
                <div className={styles.history_card}>
                    <h3>6. Educational Excellence</h3>
                    <p>In Guwahati, The Green School International has carved a niche for itself among the city's finest educational institutions, offering an exceptional learning environment where history is not just learned but actively shaped by the bright minds of our students.</p>
                </div>
            </div>
       
            
          
                
         
        </div>
  )
}

export default History