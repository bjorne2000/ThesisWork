import React from 'react'
import styles from '../styles/OmMig.module.css'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import ImageGrid from '../components/ImageGrid'
import EmptyGrid from '../components/EmptyGrid'


function omMig() {
  return (
    <div>
        <Grid container>
          <Grid item md={12} sm={12} xs={12}>
            <Grid container >
              <Grid item md={12} sm={12}>
                  <h3 className={styles.titleText}>
                    Om mig
                  </h3>
              </Grid>
              <ImageGrid propMd="12" propSm="12" propImg="/christina.jpg" text="" route=""/>
            </Grid>
          </Grid>
        </Grid>

        <p className={styles.smallText}>       consequat. Mauris congue ultricies erat in nunc id magna interdum placerat semper a odio. Sed a sem nunc. Nam ut sagittis velit, nec pretium augue. 
                    Cras mi orci, in vestibulum urna semper vel. Quisque in congue metus, ut porttitor massa.
                    utpat eu. Morbi pharetra leo quis magna eleifend, vel tincidunt lacus varius. Ph                    consequat. Mauris congue ultricies erat in nunc id magna interdum placerat semper a odio. Sed a sem nunc. Nam ut sagittis velit, nec pretium augue. 
                    Cras mi orci, in vestibulum urna semper vel. Quisque in congue metus, ut porttitor massa.
                    utpat eu. Morbi pharetra leo quis magna eleifend, vel tincidunt lacus varius. Ph</p>

        <Grid container>
        <EmptyGrid propMd="3"/>
        <ImageGrid propMd="3" propSm="12" propImg="/skedar.jpg" text="go mat" route="" scroll={false}/>
        <ImageGrid propMd="3" propSm="12" propImg="/butterFly.jpg" text="fjäril flyger" route="" scroll={false}/>
        <EmptyGrid propMd="3"/>
        <EmptyGrid propMd="3"/>
        <ImageGrid propMd="3" propSm="12" propImg="/skogsBild.jpg" text="skogen är bra" route="" scroll={false}/>
        <ImageGrid propMd="3" propSm="12" propImg="/staty.jpg" text="inre frid" route="" scroll={false}/>
        <EmptyGrid propMd="3"/>
        </Grid>
          
    </div>

  )
}

export default omMig