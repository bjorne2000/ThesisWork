import React from 'react'
import Image from 'next/image'
import Grid from '@mui/material/Grid';
import styles from '../styles/Home.module.css'
import ImageGrid from '../components/ImageGrid';
import EmptyGrid from '../components/EmptyGrid';

function home() {
  return (
    
      <Grid container className={styles.bigGrid}>
              <Image src="/landskap.jpg" className={styles.bild}
      alt="lite blommor" 
      height={500}width={2000}/> 

        <Grid container className={styles.redGrid}>
          <Grid item>
                <h1 className={styles.titleText}>Livskraft - </h1>
          </Grid>

        </Grid>
        <EmptyGrid propMd={4}/>

      <Grid item md={4}>

      
        <Grid container>

        
        <Grid item className={styles.textGrid}>
          
          
          <p>       Abhyanga, en fantastisk och välgörande ayurvedisk massage. Den försätter din kropp i djup avslappning reducerar stress och spänningar. Som om det inte är nog smörjer den din hud och mjukar upp dina leder och muskler. Kan det bli bättre? Välkommen att boka tid.

    </p>
        </Grid>

        <Grid item className={styles.smallText}>
        <p>     Abhyanga, en fantastisk och välgörande ayurvedisk massage. Den försätter din kropp i djup avslappning reducerar stress och spänningar. Som om det inte är nog smörjer den din hud och mjukar upp dina leder och muskler. Kan det bli bättre? Välkommen att boka tid.

          <br/>
          <br/>
          <br/>
          <br/>
    consequat. Mauris congue ultricies erat in nunc id magna interdum placerat semper a odio. Sed a sem nunc. Nam ut sagittis velit, nec pretium augue. 
    Cras mi orci, in vestibulum urna semper vel. Quisque in congue metus, ut porttitor massa.
    utpat eu. Morbi pharetra leo quis magna eleifend, vel tincidunt lacus varius. Ph
    </p>
        </Grid>

        <Grid container>
        
        <ImageGrid propMd="6" propSm="12" propImg="/staty.jpg" text="Ayurveda" route="/ayurvedaInfo"/>
        <ImageGrid propMd="6" propSm="12" propImg="/massageBord.jpg" text="Behandlingar" route="/radgivning"/>
        

        <ImageGrid propMd="6" propSm="12" propImg="/jordning.png" text="Jordning" route="/jordning"/>
        
        <ImageGrid propMd="6" propSm="12" propImg="/christina.jpg" text="Om mig" route="/omMig"/>

        
        <ImageGrid propMd="12" propSm="12" propImg="/staty.jpg" text="Kontakt" route="/kontakt"/>
        </Grid>
        </Grid>
        </Grid>

        <EmptyGrid propMd={4}/>
      </Grid>
    
  )
}

export default home