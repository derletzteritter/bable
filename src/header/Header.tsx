import React from 'react'
import { Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react';
import styles from './header.module.css'
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink } from 'react-router-dom';
import { FaCloud } from "react-icons/fa";
import { ArrowForwardIcon, ChatIcon } from '@chakra-ui/icons'


export default function Header() {
  const { logout } = useAuth0()

  return (
    <div className={styles.header}>
      <Flex align="center">
        <Box p="2">
          <NavLink to="/">
            <Heading color="white" size="2xl">Itschip.io</Heading>
          </NavLink>
        </Box>
        <Spacer />
        <Box>
          <NavLink to="/images">
            <Button 
              leftIcon={<FaCloud/>} 
              colorScheme="twitter"
              variant="solid"
              mr="4"
            >
            </Button>
          </NavLink>
          <Button 
            leftIcon={<ChatIcon />}
            colorScheme="twitter"
            variant="solid"
            mr="4">
            Chat
          </Button>
          <Button 
            rightIcon={<ArrowForwardIcon />}
            variant="outline"
            colorScheme="twitter"
            onClick={() => logout({ 
              returnTo: window.location.origin 
            })} 
            mr="4">
            Log out
          </Button>
        </Box>
      </Flex>
    </div>
  )
}
