import React from 'react'
import Grid from '@mui/material/Grid';
import EmptyGrid from '../components/EmptyGrid';
import styles from '../styles/Boka.module.css'
function Boka() {
  return (
    <Grid container>
        <EmptyGrid propMd={4} propSm={2}/>
        <Grid item md={4} sm={8}>
            <h2 className={styles.title}>Här kan du boka </h2>
            <p className={styles.smallText}>equat. Mauris congue ultricies erat in nunc id magna interdum placerat semper a odio. Sed a sem nunc. Nam ut sagittis velit, nec pretium augue. 
                  Cras mi orci, in vestibulum urna semper vel. Quisque in congue metus, ut porttitor massa.
                  utpat eu. Morbi pharetra leo quis magna eleifend, vel tincidunt lacus varius. Ph urna semper vel. Quisque in congue metus, ut porttitor massa.
                  utpat eu. Morbi pharetus, ut porttitor massa.
                  utpat ena eleifend, vel tincidunt lacus varius. Ph</p>
        </Grid>
        <EmptyGrid propMd={4} propSm={2}/>

    </Grid>
  )
}

export default Boka