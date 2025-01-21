import React from 'react'
import styles from './Button.module.css'

const Button = ({clickHandler,children}) => {
  return (
    <button className={styles.primary_button} onClick={clickHandler}>{children}</button>
  )
}

export default Button