import React from 'react'
import { Heading } from '@chakra-ui/react';
import styles from './home.module.css';
import { useAuth0 } from '@auth0/auth0-react';

export default function Home() {
  const { user } = useAuth0();

  return (
    <div className={styles.homeHero}>
      <Heading>Welcome back, {user.name}</Heading>
      {user.email}
    </div>
  )
}
