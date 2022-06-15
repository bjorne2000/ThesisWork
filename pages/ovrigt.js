import React from 'react'
import styles from '../styles/Vata.module.css'
import Grid from '@mui/material/Grid';
import EmptyGrid from '../components/EmptyGrid';
function ovrigt() {
  return (
    
    <Grid container>
        <EmptyGrid propSm={1} propMd={4}/>
        <Grid item sm={10} md={4}>
          <h3 className={styles.titleText}>Övrigt</h3>
          <p className={styles.smallText}>
          consequat. Mauris congue ultricies erat in nunc id magna interdum placerat semper a odio. Sed a sem nunc. Nam ut sagittis velit, nec pretium augue. 
                    Cras mi orci, in vestibulu massa.r vel. Quisque in congue metus, ut porttitor massa.
                    utpat ena eleifend, vel tincidunt lacus varius. Ph
                    utpat eu. Morbi pha laneru omals opes salöwe ifend, vel tincidunt lacus varius. Ph
                    <br/>
                    <br/>
                    
                    consequat. Mauris congue ultricies erat in nunc id magna interdum placerat semper a odio. Sed a sem nunc. Nam ut sagittis velit, nec pretium augue. 
                    Cras mi orci, in vestibulum urna semper vel. Quisque in congue metus, ut porttitor massa.
                    utpat eu. Morbi pharetra leo quis magna eleifend, vel tincidunt lacus varius. Ph urna semper vel. Quisque in congue metus, ut porttitor massa.
                    utpat eu. Morbi pharetus, ut porttitor massa.
                    utpat ena eleifend, vel tincidunt lacus varius. Ph
          </p>
          <p className={styles.textGrid}>underrubrik</p>
          <p className={styles.smallText}>t. Mauris congue ultricies erat in nunc id magna interdum placerat semper a odio. Sed a sem nunc. Nam ut sagittis velit, nec pretium augue. 
                    Cras mi orci, in vestibulum urna semper vel. Quisque in congue metus, ut porttitor massa.
                    utpat eu. Morbi pharetra leo quis magna eleifend, vel tincidunt lacus varius. Ph urna semper vel. Quisque in congue metus, ut porttitor massa.
                    utpat eu. Morbi pharetus, ut porttitor massa.</p>
        </Grid>
        <EmptyGrid propSm={1} propMd={4}/>
    </Grid>
  )
}

export default ovrigt