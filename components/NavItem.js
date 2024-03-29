// import { alignProperty } from '@mui/material/styles/cssUtils';
import React, { useState } from 'react';
import styles from '../styles/Nav.module.css'

function NavItem(props) {

    const[open, setOpen] = useState(false)
  return (
    <li className={styles.navItem}>
        <a href={props.route} onClick={() => setOpen(!open)} >
              {props.text}            
        </a>
        <div onMouseLeave={() => setOpen(false)}>
          {open && props.children}
        </div>
        
    </li>
  )
}

export default NavItem