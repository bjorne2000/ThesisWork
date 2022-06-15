import React from 'react'
import Image from 'next/image'
import Grid from '@mui/material/Grid';
import ImageGrid from '../components/ImageGrid';
import TextGrid from '../components/TextGrid';
import EmptyGrid from '../components/EmptyGrid';
import styles from '../styles/Jordning.module.css'
function jordning() {
  return (

    <Grid container>
      <EmptyGrid propMd={4}/>
      <Grid item md={4}>
        <h1 className={styles.titleText}>Jordning</h1>
        <h3 className={styles.smallTitle}>varför</h3>
        <p className={styles.breadText}> consequat. Mauris congue ultricies erat in nunc id magna interdum placerat semper a odio. Sed a sem nunc. Nam ut sagittis velit, nec pretium augue. 
                  Cras mi orci, in vestibulum urna semper vel. Quisque in congue metus, ut porttitor massa.
                  utpat eu. Morbi pharetra leo quis magna eleifend, vel tincidunt lacus varius. Ph urna semper vel. Quisque in congue metus, ut porttitor massa.
                  utpat eu. Morbi pharetus, ut porttitor massa.
                  utpat ena eleifend, vel tincidunt lacus varius. Ph</p>
      </Grid>
      <EmptyGrid propMd={4}/>
      <ImageGrid propMd="12" propSm="12" propImg="/jordning.png" 
      text="Jordning" route="/jordning"/>
    </Grid>
  )
}

export default jordning