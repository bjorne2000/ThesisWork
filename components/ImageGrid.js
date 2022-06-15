import React from 'react'
import Image from 'next/image'
import Grid from '@mui/material/Grid';
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function ImageGrid(props) {
  return (
    <Grid item md={props.propMd} sm={props.propSm}  className={styles.paddedGrid}>
        <Grid container>
            <Link href={props.route} scroll={props.scroll}>

        <Grid item  md={12} sm={12} className={styles.imageText}>
        <Image className={styles.circleImage} src={props.propImg}  width={250} height={250}/>
        </Grid>
        </Link>
        <Grid container>
        <Link href={props.route}>
        <Grid item className={styles.imageText} md={12} sm={12}>
            <h3 href={props.route}>{props.text}</h3>
        </Grid>
        </Link>
            </Grid>
           
        </Grid>
        
            
        
        
    </Grid>
  )
}

export default ImageGrid