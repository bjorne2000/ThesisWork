import React from 'react'
import Grid from '@mui/material/Grid';
import styles from '../styles/AyurvedaInfo.module.css'
import Paper from '@mui/material/Paper';
import Image from 'next/image'
import Link from 'next/link'
import TextGrid from '../components/TextGrid';
import EmptyGrid from '../components/EmptyGrid';

function ayurvedaInfo() {
  return (
    <Grid container>
        

        <EmptyGrid propMd={4}/>

     <Grid item md={4} sm={12} xs={12} >
      <Grid container>
        <Grid item md={12}>


    <h3 className={styles.titleText}>Ayurveda</h3>
   <p className={styles.textGrid}>orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis, nibh eu pharetra placerat, tellus mi ullamcorper urna, eget dignissim purus dui et diam. Aliquam eu tincidunt nibh. Vestibulum vulputate sed justo a
       consequat. Mauris congue ultricies erat, et dignissim neque finibus faucibus. Nam lectus ex, sagittis non tortor sed, hendrerit tempor nulla. Etiam euismod odio ac congue venenatis. V
       estibulum in condimentum tellus. In imperdiet dictum ligula ac rutrum. Donec in nunc id magna interdum placerat semper a odio. Sed a sem nunc. Nam ut sagittis velit, nec pretium augue. 
    Cras mi orci, in vestibulum urna semper vel. Quisque in congue metus, ut porttitor massa."</p>
      



   <h3 className={styles.titleText}>Vata</h3>
   <p className={styles.textGrid}>orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis, nibh eu pharetra placerat, tellus mi ullamcorper urna, eget dignissim purus dui et diam. Aliquam eu tincidunt nibh. Vestibulum vulputate sed justo a
       consequat. Mauris congue ultricies erat, et dignissim neque finibus faucibus. Nam lectus ex, sagittis non tortor sed, hendrerit tempor nulla. Etiam euismod odio ac congue venenatis. V
       estibulum in condimentum tellus. In imperdiet dictum ligula ac rutrum. Donec in nunc id magna interdum placerat semper a odio. Sed a sem nunc. Nam ut sagittis velit, nec pretium augue. 
    Cras mi orci, in vestibulum urna semper vel. Quisque in congue metus, ut porttitor massa."</p>
      
   <Link href="/vata" >
     <p className={styles.linkText}>Läs mer</p>
   </Link>


   <h3 className={styles.titleText}>Pita</h3>
   <p className={styles.textGrid}>orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis, nibh eu pharetra placerat, tellus mi ullamcorper urna, eget dignissim purus dui et diam. Aliquam eu tincidunt nibh. Vestibulum vulputate sed justo a
       consequat. Mauris congue ultricies erat, et dignissim neque finibus faucibus. Nam lectus ex, sagittis non tortor sed, hendrerit tempor nulla. Etiam euismod odio ac congue venenatis. V
       estibulum in condimentum tellus. In imperdiet dictum ligula ac rutrum. Donec in nunc id magna interdum placerat semper a odio. Sed a sem nunc. Nam ut sagittis velit, nec pretium augue. 
    Cras mi orci, in vestibulum urna semper vel. Quisque in congue metus, ut porttitor massa."</p>
      
   <Link href="/pita" >
     <p className={styles.linkText}>Läs mer</p>
   </Link>



   <h3 className={styles.titleText}>Kapha</h3>
   <p className={styles.textGrid}>orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis, nibh eu pharetra placerat, tellus mi ullamcorper urna, eget dignissim purus dui et diam. Aliquam eu tincidunt nibh. Vestibulum vulputate sed justo a
       consequat. Mauris congue ultricies erat, et dignissim neque finibus faucibus. Nam lectus ex, sagittis non tortor sed, hendrerit tempor nulla. Etiam euismod odio ac congue venenatis. V
       estibulum in condimentum tellus. In imperdiet dictum ligula ac rutrum. Donec in nunc id magna interdum placerat semper a odio. Sed a sem nunc. Nam ut sagittis velit, nec pretium augue. 
    Cras mi orci, in vestibulum urna semper vel. Quisque in congue metus, ut porttitor massa."</p>
      
   <Link href="/kapha" >
     <p className={styles.linkText}>Läs mer</p>
   </Link>

   <h3 className={styles.titleText}>Dosha</h3>
   <p className={styles.textGrid}>orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis, nibh eu pharetra placerat, tellus mi ullamcorper urna, eget dignissim purus dui et diam. Aliquam eu tincidunt nibh. Vestibulum vulputate sed justo a
       consequat. Mauris congue ultricies erat, et dignissim neque finibus faucibus. Nam lectus ex, sagittis non tortor sed, hendrerit tempor nulla. Etiam euismod odio ac congue venenatis. V
       estibulum in condimentum tellus. In imperdiet dictum ligula ac rutrum. Donec in nunc id magna interdum placerat semper a odio. Sed a sem nunc. Nam ut sagittis velit, nec pretium augue. 
    Cras mi orci, in vestibulum urna semper vel. Quisque in congue metus, ut porttitor massa."</p>
      
   <Link href="/dosha" >
     <p className={styles.linkText}>Läs mer</p>
   </Link>
   

   </Grid>
   </Grid>
   
   <EmptyGrid propMd={4}/>
   </Grid>

    </Grid>

  )
}

export default ayurvedaInfo





{/* <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis, nibh eu pharetra placerat, tellus mi ullamcorper urna, eget dignissim purus dui et diam. Aliquam eu tincidunt nibh. Vestibulum vulputate sed justo a
consequat. Mauris congue ultricies erat, et dignissim neque finibus faucibus. Nam lectus ex, sagittis non tortor sed, hendrerit tempor nulla. Etiam euismod odio ac congue venenatis. V
estibulum in condimentum tellus. In imperdiet dictum ligula ac rutrum. Donec in nunc id magna interdum placerat semper a odio. Sed a sem nunc. Nam ut sagittis velit, nec pretium augue. 
Cras mi orci, in vestibulum urna semper vel. Quisque in congue metus, ut porttitor massa."</p>
<div>
<Link href="/pita" >
<p className={styles.linkText}>Läs mer</p>
</Link>
</div> */}