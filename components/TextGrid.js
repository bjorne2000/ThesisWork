import React from 'react'
import Grid from '@mui/material/Grid';
import styles from '../styles/TextGrid.module.css'
function textGrid(props) {
  return (
        <Grid item md={props.propMd} sm={props.propSm} className={styles.center}>
                <Grid container>
                    <Grid item className={styles.titleText}>
                    <h1>{props.title}</h1>
                    </Grid>
                    <Grid item className={styles.smallTitle}>
                    <h4>{props.smallTitle}</h4>
                    </Grid>
                    <Grid item className={styles.smallText}>
                    <p>{props.text}</p>   
                    </Grid>

                </Grid>
                    
                            
        </Grid>
  )
}

export default textGrid