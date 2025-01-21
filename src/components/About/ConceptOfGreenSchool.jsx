import React from 'react'
import styles from './ConceptOfGreenSchool.module.css'

const ConceptOfGreenSchool = () => {
  return (
    <div className={styles.about_concept} data-aos="fade-up" data-aos-once> 
            <div className={styles.about_concept_head}> 
                <h2>Concept of Green School</h2>
                <p>The Green School International, Guwahati concept stems from a growing awareness of environmental issues and a desire to instil sustainability values in education. By integrating eco-friendly practices, the concept aims to:</p>
            </div>
            <div className={styles.about_concept_desc}>
                <div className={styles.about_concept_card}>
                    <h3>Environmental Stewardship</h3>
                    <p>Promote a sense of responsibility for the environment among students, encouraging practices that minimize ecological impact.</p>
                </div>
               
                <div className={styles.about_concept_card}>
                    <h3>Hands-On Learning</h3>
                    <p>Provide tangible experiences related to sustainability, allowing students to witness and participate in eco-friendly initiatives.</p>
                </div>
                <div className={styles.about_concept_card}>
                    <h3>Health and Well-being</h3>
                    <p>Foster a healthier learning environment by incorporating natural elements, promoting outdoor activities, and reducing exposure to harmful substances</p>
                </div>
                <div className={styles.about_concept_card}>
                    <h3>Long-Term Impact</h3>
                    <p>Educate students about the importance of sustainable living, aiming to create a generation that makes informed choices for a more sustainable future.</p>
                </div>
                <div className={styles.about_concept_card}>
                    <h3>Innovation</h3>
                    <p> Encourage the development and implementation of innovative, sustainable solutions within the school environment, inspiring students to think creatively about environmental challenges.</p>
                </div>
                <div className={styles.about_concept_card}>
                    <h3>Community Engagement</h3>
                    <p>Extend green practices beyond the school premises, involving the community in eco-friendly initiatives and building a broader culture of sustainability.</p>
                </div>
            </div>

        </div>
  )
}

export default ConceptOfGreenSchool