import React from 'react'
import styles from './home.module.css'

export default function Header() {
  return (
    <div>
      <h1 
        className={styles.subTitle}
      >
        Upload Chat <span>share</span>
      </h1>
    </div>
  )
}
