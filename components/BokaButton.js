import React from 'react'
import Button from '@mui/material/Button';
import styles from '../styles/BokaButton.module.css'
import Link from 'next/link';
function BokaButton() {
  return (
    <Button href='/boka' className={styles.bokaButton}>

        Boka
        </Button>
  )
}

export default BokaButton