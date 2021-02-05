import React, { useState } from 'react'
import styles from './home.module.css'
import { useAuth } from '../auth/hooks/useAuth';
import Header from './Header';
import NavBar from '../nav/components/NavBar';


export default function Home() {
  const { signIn } = useAuth();
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <div className={styles.homeHero}>
      <NavBar />
      <Header />
    </div>
  )
}
