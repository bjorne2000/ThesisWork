import React from 'react'
import styles from '../styles/OmMig.module.css'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import ImageGrid from '../components/ImageGrid'
import EmptyGrid from '../components/EmptyGrid'


function omMig() {
  return (
    <Grid container>
      <EmptyGrid propMd={4}/>
              <Grid item md={4}>
                <Grid container className={styles.redGrid}>
                
              
              <ImageGrid propMd="12" propSm="12" propImg="/christina.jpg" text="" route=""/>
              <Grid item>
              <h3 className={styles.textGrid}>Här är jag</h3>
        <p className={styles.smallText}> consequat. Mauris congue ultricies erat in nunc id magna interdum placerat semper a odio. Sed a sem nunc. Nam ut sagittis velit, nec pretium augue. 
                    Cras mi orci, in vestibulum urna semper vel. Quisque in congue metus, ut porttitor massa.
                    utpat eu. Morbi pharetra leo quis magna eleifend, vel tincidunt lacus varius. Ph consequat. Mauris congue ultricies erat in nunc id magna interdum placerat semper a odio. Sed a sem nunc. Nam ut sagittis velit, nec pretium augue. 
                    Cras mi orci, in vestibulum urna semper vel. Quisque in congue metus, ut porttitor massa.
                    utpat eu. Morbi pharetra leo quis magna eleifend, vel tincidunt lacus varius. Ph</p>

              </Grid>


                </Grid>
              </Grid>

              <EmptyGrid propMd={4}/>
        <Grid container>

        <ImageGrid propMd="3" propSm="12" propImg="/skedar.jpg" text="go mat" route="" scroll={false}/>
        <ImageGrid propMd="3" propSm="12" propImg="/butterFly.jpg" text="fjäril flyger" route="" scroll={false}/>

        <ImageGrid propMd="3" propSm="12" propImg="/skogsBild.jpg" text="skogen är bra" route="" scroll={false}/>
        <ImageGrid propMd="3" propSm="12" propImg="/staty.jpg" text="inre frid" route="" scroll={false}/>

        </Grid>
          
    </Grid>

  )
}

export default omMig