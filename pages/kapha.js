import React from 'react'
import styles from '../styles/Vata.module.css'
import Grid from '@mui/material/Grid';

function vata() {
  return (
    
        <Grid container className={styles.bigGrid}>
                <Grid item md={9}>
                    <h2 className={styles.titleText}>
                        Vad är Kapha?
                    </h2>

                    <h4 className={styles.textGrid}>
                        underrubrik
                    </h4>
                    <p className={styles.smallText}>
                    consequat. Mauris congue ultricies erat in nunc id magna interdum placerat semper a odio. Sed a sem nunc. Nam ut sagittis velit, nec pretium augue. 
                    Cras mi orci, in vestibulum urna semper vel. Quisque in congue metus, ut porttitor massa.
                    utpat eu. Morbi pharetra leo quis magna eleifend, vel tincidunt lacus varius. Ph
                    </p>


                    <h4 className={styles.textGrid}>
                        underrubrik
                    </h4>
                    <p className={styles.smallText}>
                    consequat. Mauris congue ultricies erat in nunc id magna interdum placerat semper a odio. Sed a sem nunc. Nam ut sagittis velit, nec pretium augue. 
                    Cras mi orci, in vestibulum urna semper vel. Quisque in congue metus, ut porttitor massa.
                    utpat eu. Morbi pharetra leo quis magna eleifend, vel tincidunt lacus varius. Ph
                    </p>


                    <h4 className={styles.textGrid}>
                        underrubrik
                    </h4>
                    <p className={styles.smallText}>
                    consequat. Mauris congue ultricies erat in nunc id magna interdum placerat semper a odio. Sed a sem nunc. Nam ut sagittis velit, nec pretium augue. 
                    Cras mi orci, in vestibulum urna semper vel. Quisque in congue metus, ut porttitor massa.
                    utpat eu. Morbi pharetra leo quis magna eleifend, vel tincidunt lacus varius. Ph
                    rci, in vestibulum urna semper vel. Quisque in congue metus, ut porttitor massa.
                    utpat eu. Morbi pharetra leo quis magna eleifend, vel tincidunt lacus varius. 
                    rci, in vestibulum urna semper vel. Quisque in congue metus, ut porttitor massa.
                    utpat eu. Morbi pharetra leo quis magna eleifend, vel tincidunt lacus varius. 
                    </p>
                </Grid>
                <Grid item md={3} className={styles.redGrid}>

                    <h4>
                        kanske någon bild här eller något tips
                    </h4>

                </Grid>

        </Grid>
    
  )
}

export default vata