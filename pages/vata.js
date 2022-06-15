import React from 'react'
import styles from '../styles/Vata.module.css'
import Grid from '@mui/material/Grid';
import EmptyGrid from '../components/EmptyGrid';
import BokaButton from '../components/BokaButton';
function vata() {
  return (
    
        <Grid container className={styles.bigGrid}>
            <EmptyGrid propMd={4} propSm={1}/>
            <Grid item md={4} sm={12} >
                <Grid container>
                <Grid item md={9}  sm={10}>
                    <h2 className={styles.titleText}>
                        Vad är vata?
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

                    <BokaButton/>
                </Grid>

                </Grid>
                </Grid>
                <EmptyGrid propMd={0} propSm={1}/>
                <Grid item md={3}  sm={12}>
                        <h4>
                            kanske någon bild här eller något tips
                    </h4>

                    

</Grid>
                <EmptyGrid propMd={1} propSm={0}/>
        </Grid>
    
  )
}

export default vata