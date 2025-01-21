import React from 'react'
import Button from '../Button/Button'
import styles from './ContactUsBanner.module.css'
import { useNavigate } from 'react-router-dom'

const ContactUsBanner = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.contact_us} data-aos="fade-up" data-aos-once>
          <div className={styles.contact_text}>
            <h2>Have Any Question?</h2>
            <p>
              Please feel free to contact us at your convenience. <br /> We are eager to engage in conversation with you.</p>
          </div>
          <div>
              <Button clickHandler={()=> navigate('/contact')}>Contact Us</Button>
          </div>
        </div>
  )
}

export default ContactUsBanner