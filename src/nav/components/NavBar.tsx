import React from 'react'
import styles from './navbar.module.css';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className={styles.nav}>
      <div className={styles.title}>
        <h1>itschip.io</h1>
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            Home
          </li>
          <li>
            About
          </li>
          <li>
            Services
          </li>
          <li>
            <NavLink to="/auth">
              <button className={styles.loginButton}>
                Log in
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
