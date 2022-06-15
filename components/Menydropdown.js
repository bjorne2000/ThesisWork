import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from '../styles/Menydropdown.module.css'
import Link from 'next/link'
import {FormControl, InputLabel, Select} from '@mui/material'
import {CSSTransition} from 'react-transition-group'
import Grid from '@mui/material/Grid';



const Menydropdown = (props) => {
  const[activeMenu, setActiveMenu] = useState('main')
    const DropDownItem = (props) =>{
      return(
        <a href={props.route}className={styles.menuItem} onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
            {props.children}
        </a>
      )

    }

  return (
    <Grid container className={styles.dropdown}>
      <Grid item md={12}>
    <CSSTransition in={activeMenu === 'main'} unmountOnExit  classNames="menu-primary">
      <div className={styles.menu}>

      
      <DropDownItem route="home">{props.textOne}</DropDownItem>
      <DropDownItem goToMenu="Ayurveda">{props.textTwo}</DropDownItem>
      <DropDownItem goToMenu="Behandlingar">{props.textThree}</DropDownItem>
      <DropDownItem route="boka">{props.textFour}</DropDownItem>
      <DropDownItem route="kontakt" >{props.textFive}</DropDownItem>
      <DropDownItem route="jordning" >{props.textSix}</DropDownItem>
      <DropDownItem route="omMig" >{props.textSeven}</DropDownItem>
      </div>
    </CSSTransition>
    

    <CSSTransition in={activeMenu === 'Ayurveda'} unmountOnExit  classNames="menu-Secondary">
      <div className={styles.menuSecondary}>
      <DropDownItem route="dosha">Dosha</DropDownItem>
      <DropDownItem route="ayurvedaInfo">Ayurveda</DropDownItem> 
      <DropDownItem route="vata">Vata</DropDownItem>
      <DropDownItem route="pita">Pita</DropDownItem>
      <DropDownItem route="kapha">Kapha</DropDownItem>
      </div>
    </CSSTransition>


    <CSSTransition in={activeMenu === 'Behandlingar'} unmountOnExit  classNames="menu-Secondary">
      <div className={styles.menuSecondary}>
      <DropDownItem route="radgivning">Hälsorådgivning</DropDownItem>
      <DropDownItem route="marma">Marmabehandling</DropDownItem>
      <DropDownItem route="shirodhara">Shirodhara</DropDownItem>
      <DropDownItem route="abhyanga">Abhyanga</DropDownItem>
      <DropDownItem route="ovrigt">Övrigt</DropDownItem>
      
      
      </div>
    </CSSTransition>
    </Grid>
  
  </Grid>
  )
}

export default Menydropdown