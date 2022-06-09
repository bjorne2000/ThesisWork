
import Link from 'next/link'
import styles from '../styles/Nav.module.css'
import Menydropdown from './Menydropdown'
import Image from 'next/image'
import Grid from '@mui/material/Grid';

const Nav = (props) => {
  return (
    <div>
      <Grid container className={styles.navTitle}>
        <Grid item md={2} sm={4} xs={4} >
              <h4 className={styles.navTitleText}>Livskraft</h4>
        </Grid>


        <Grid item md={10} sm={8} xs={8}>   
    <nav className={styles.nav}>     
      <ul className={styles.ul}>
        {props.children}
      </ul>  
    </nav>
    </Grid>

    </Grid>
    </div>
  )
}

export default Nav