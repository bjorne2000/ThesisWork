
import Link from 'next/link'
import styles from '../styles/Nav.module.css'
import Menydropdown from './Menydropdown'
import Image from 'next/image'
import Grid from '@mui/material/Grid';

const Nav = (props) => {
  return (
    
      <Grid container className={styles.navTitle}>



        <Grid item md={10} sm={6} xs={6}>   
    <nav className={styles.nav}>     
      <ul className={styles.ul}>
        <li className={styles.navTitleText}>LivsKraft</li>
        {props.children}
      </ul>  
    </nav>
    </Grid>

    </Grid>
    
  )
}

export default Nav