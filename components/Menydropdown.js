import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from '../styles/Menydropdown.module.css'
import Link from 'next/link'
import {FormControl, InputLabel, Select} from '@mui/material'
import {CSSTransition} from 'react-transition-group'



const Menydropdown = (props) => {
  const[activeMenu, setActiveMenu] = useState('main')
    const DropDownItem = (props) =>{
      return(
        <a href='#' className={styles.menuItem} onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
            {props.children}
        </a>
      )

    }

  return (
  <div className={styles.dropdown}>
    <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary">
      <div className={styles.menu}>

      
      <DropDownItem>{props.textOne}</DropDownItem>
      <DropDownItem goToMenu="Ayurveda">{props.textTwo}</DropDownItem>
      <DropDownItem goToMenu="Behandlingar">{props.textThree}</DropDownItem>
      <DropDownItem>{props.textFour}</DropDownItem>
      <DropDownItem>{props.textFive}</DropDownItem>
      </div>
    </CSSTransition>
    

    <CSSTransition in={activeMenu === 'Ayurveda'} unmountOnExit timeout={500} classNames="menu-Secondary">
      <div className={styles.menuSecondary}>
      <DropDownItem>Vilken dosha tillhör du?</DropDownItem>
      <DropDownItem>Vad är Ayurveda?</DropDownItem> 
      <DropDownItem>Vata</DropDownItem>
      <DropDownItem>Pita</DropDownItem>
      <DropDownItem>Kapha</DropDownItem>
      </div>
    </CSSTransition>


    <CSSTransition in={activeMenu === 'Behandlingar'} unmountOnExit timeout={500} classNames="menu-Secondary">
      <div className={styles.menuSecondary}>
      <DropDownItem>Ayurvedisk hälsorådgivning</DropDownItem>
      <DropDownItem>Marmabehandling</DropDownItem>
      <DropDownItem>Shirodhara</DropDownItem>
      <DropDownItem>Abhyanga</DropDownItem>
      
      
      </div>
    </CSSTransition>

  </div>
  )
}

export default Menydropdown