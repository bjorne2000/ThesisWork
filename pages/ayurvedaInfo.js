import React from 'react'
import Grid from '@mui/material/Grid';
import styles from '../styles/AyurvedaInfo.module.css'
import Paper from '@mui/material/Paper';
import Image from 'next/image'
import Link from 'next/link'
import TextGrid from '../components/TextGrid';

function ayurvedaInfo() {
  return (
    <div>


    
    <Grid container className={styles.bigGrid}>
        

     
     <Grid item md={12} sm={12} xs={12}>

       <TextGrid title="Vad är Ayurveda?"/>

      <TextGrid smallTitle="Ayurveda" text="orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis, nibh eu pharetra placerat, tellus mi ullamcorper urna, eget dignissim purus dui et diam. Aliquam eu tincidunt nibh. Vestibulum vulputate sed justo a
       consequat. Mauris congue ultricies erat, et dignissim neque finibus faucibus. Nam lectus ex, sagittis non tortor sed, hendrerit tempor nulla. Etiam euismod odio ac congue venenatis. V
       estibulum in condimentum tellus. In imperdiet dictum ligula ac rutrum. Donec in nunc id magna interdum placerat semper a odio. Sed a sem nunc. Nam ut sagittis velit, nec pretium augue. 
    Cras mi orci, in vestibulum urna semper vel. Quisque in congue metus, ut porttitor massa."/>
    


<TextGrid smallTitle="Vata" text="orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis, nibh eu pharetra placerat, tellus mi ullamcorper urna, eget dignissim purus dui et diam. Aliquam eu tincidunt nibh. Vestibulum vulputate sed justo a
       consequat. Mauris congue ultricies erat, et dignissim neque finibus faucibus. Nam lectus ex, sagittis non tortor sed, hendrerit tempor nulla. Etiam euismod odio ac congue venenatis. V
       estibulum in condimentum tellus. In imperdiet dictum ligula ac rutrum. Donec in nunc id magna interdum placerat semper a odio. Sed a sem nunc. Nam ut sagittis velit, nec pretium augue. 
    Cras mi orci, in vestibulum urna semper vel. Quisque in congue metus, ut porttitor massa."/>
       <div>
   <Link href="/vata" >
     <p className={styles.linkText}>Läs mer</p>
   </Link>
   </div>

   <TextGrid smallTitle="Pita" text="orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis, nibh eu pharetra placerat, tellus mi ullamcorper urna, eget dignissim purus dui et diam. Aliquam eu tincidunt nibh. Vestibulum vulputate sed justo a
       consequat. Mauris congue ultricies erat, et dignissim neque finibus faucibus. Nam lectus ex, sagittis non tortor sed, hendrerit tempor nulla. Etiam euismod odio ac congue venenatis. V
       estibulum in condimentum tellus. In imperdiet dictum ligula ac rutrum. Donec in nunc id magna interdum placerat semper a odio. Sed a sem nunc. Nam ut sagittis velit, nec pretium augue. 
    Cras mi orci, in vestibulum urna semper vel. Quisque in congue metus, ut porttitor massa."/>
       <div>
   <Link href="/pita" >
     <p className={styles.linkText}>Läs mer</p>
   </Link>
   </div>


   <TextGrid smallTitle="Kapha" text="orem ipsum dolor sit ameex, sagittis non tortor sed, hendrerit tempor nulla. Etiam euismod odio ac congue venenatis. V
       estibulum in condimentum tellus. In imperdiet dictum ligula ac rutrum. Donec in nunc id magna interdum placerat semper a odio. Sed a sem nunc. Nam ut sagittis velit, nec pretium augue. 
    Cras mi orci, in vestibulum urna semper vel. Quisque in congue metus, ut porttitor massa."/>
       <div>
   <Link href="/kapha" >
     <p className={styles.linkText}>Läs mer</p>
   </Link>
   </div>

   <TextGrid smallTitle="Vilken dosha är du?" text="orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis, nibh eu pharetra placerat, tellus mi ullamcorper urna, eget dignissim purus dui et diam. Aliquam eu tincidunt nibh. Vestibulum vulputate sed justo a
       consequat. Mauris congue ultricies erat, et dignissim neque fini semper a odio. Sed a sem nunc. Nam ut sagittis velit, nec pretium augue. 
    Cras mi orci, in vestibulum urna semper vel. Quisque in congue metus, ut porttitor massa."/>
       <div>
   <Link href="/dosha" >
     <p className={styles.linkText}>Läs mer</p>
   </Link>
   </div>
{/* 
      <div className={styles.textGrid}>

      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis, nibh eu pharetra placerat, tellus mi ullamcorper urna, eget dignissim purus dui et diam. Aliquam eu tincidunt nibh. Vestibulum vulputate sed justo a
       consequat. Mauris congue ultricies erat, et dignissim neque finibus faucibus. Nam lectus ex, sagittis non tortor sed, hendrerit tempor nulla. Etiam euismod odio ac congue venenatis. V
       estibulum in condimentum tellus. In imperdiet dictum ligula ac rutrum. Donec in nunc id magna interdum placerat semper a odio. Sed a sem nunc. Nam ut sagittis velit, nec pretium augue. 
    Cras mi orci, in vestibulum urna semper vel. Quisque in congue metus, ut porttitor massa.
     
    utpat eu. Morbi pharetra leo quis magna eleifend, vel tincidunt lacus varius. Ph
 
</p> 
</div>



    
    <div className={styles.textGrid}>

    
      <p>
      Vivamus et lacus non nunc varius ultrices quis in velit. Mauris finibus mi orci, in vestibulum urna semper vel. Quisque in congue metus, ut porttitor massa.
    
    utpat eu. Morbi pharetra leo quis magna eleifend, vel tincidunt lacus varius. Ph <br/>
    asellus orci felis, elementum eu metus nec, tempor laoreet libero. Nulla ultricies tempus egestas.

      </p>
      </div>
      

   <h3 className={styles.titleText}>
     Vata
   </h3> 

    

   <div className={styles.textGrid}>

   <p>
   utpat eu. Morbi pharetra leo quis magna eleifend, vel tincidunt lacus varius. Ph
    asellus orci felis, elementum eu metus nec, tempor laoreet libero. Nulla ultricies tempus egestas. 
   </p>

   </div>
   <div>
   <Link href="/vata" >
     <p className={styles.linkText}>Läs mer</p>
   </Link>
   </div>


   <h3 className={styles.titleText}>
     Pitta
   </h3> 
   <div className={styles.textGrid}>
   <p>
   utpat eu. Morbi pharetra leo quis magna eleifend, vel tincidunt lacus varius. Ph
   utpat eu. Morbi pharetra leo qupor laoreet libero. is magna elei
    asellus orci felis, elementum eu metus nec, tempor laoreet libero. Nulla ultricies tempus egestas. 
   </p>

   </div>
   <div>
   <Link href="/pita" >
     <p className={styles.linkText}>Läs mer</p>
   </Link>
   </div>


   <h3 className={styles.titleText}>
     Kapha
   </h3> 
   <div className={styles.textGrid}>
   <p>
   utpat eu. Morbi pharetra leagna eleifend, vel tincidunt lacus varius. Ph
   utpat eu. Morbi pharetrlibero. is magna elei
    asellus orci felis, elementum eu metus nec, tempor laoreet libero. Nulla ultricies tempus egestas. 
   </p>

   </div>
   <div>
   <Link href="/kapha" >
     <p className={styles.linkText}>Läs mer</p>
   </Link>
   </div>


   <h3 className={styles.titleText}>
     Vilken dosha tillhör du?
   </h3> 
   <div className={styles.textGrid}>
   <p>
   utpat eu. Morbi pharetra leagna eleifend, vel tincidunt lacus varius. Ph
   utpat eu. Morbi pharetrlibero. is magna eleiretra leagna eleifend, vel tincidunt lacus varius. Ph
   utpat eu. Morbi pharetrlibero. is m
    asellus orci felis, elementum eu metus nec, tempor laoreet libero. Nulla ultricies tempus egestas. 
   </p>

   </div>
   <div>
   <Link href="/dosha" >
     <p className={styles.linkText}>Läs mer</p>
   </Link>
   </div> */}
   
   </Grid>
   {/* <Grid item md={4}>


      

   
     <Grid item >
       <Image src="/greyFlower.jpg" width={300} height={200} className={styles.imagePlacement}/>

       <h2 className={styles.imageText}>
         titel 
       </h2>
       <p className={styles.imageText}>
         här kan det stå något kort
       </p>
       </Grid>
       
       </Grid>
       <Grid container className={styles.redGrid}>

       <Grid item>
       <Image src="/niceFlowers.jpg" width={300} height={200} className={styles.imagePlacement}/>
       <p className={styles.imageText}>
         här kan det stå något kort
       </p>

       </Grid>




    
    </Grid> */}
    </Grid>
    </div>
  )
}

export default ayurvedaInfo