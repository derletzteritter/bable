import React from 'react'
import styles from './home.module.css'
import Header from './Header';
import NavBar from '../nav/components/NavBar';


export default function Home() {

  return (
    <div className={styles.homeHero}>
      <NavBar />
      <Header />
    </div>
  )
}
