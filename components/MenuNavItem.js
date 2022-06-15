import React, { useState } from 'react';
import styles from '../styles/MenuNavItem.module.css'
import Grid from '@mui/material/Grid';
function NavItem(props) {

    const[open, setOpen] = useState(false)
  return (
    <li className={styles.menuNavItem}>
        <a  onClick={() => setOpen(!open)} >
          
              {props.text}            
                   
        </a>
        

       
        <div className={styles.dumDiv} onMouseLeave={() => setOpen(false)}>
          {open && props.children}
        </div>
        
    </li>
  )
}

export default NavItem