import React from 'react'
import styles from './TypingAnimation.module.css'

const TypingAnimation = () => {
  return (
    <div className={styles.chat_bubble}>
      <div className={styles.typing}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
      </div>
    </div>
  )
}

export default TypingAnimation