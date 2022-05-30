import React from 'react'
import styles from '../styles/DropDown.module.css'
import Link from 'next/link'
function DropDown(props) {


    const DropDownItem = (props) =>{
        return(
          <a className={styles.menuItem}>
              {props.children}
          </a>
        )
  
      }
  return (
    <div className={styles.dropdown}>
      <Link href={props.routeOne}>
        <a>
         <DropDownItem>{props.textOne}</DropDownItem>
        </a>
      </Link>

      <Link href={props.routeTwo}>
        <a>
        <DropDownItem >{props.textTwo}</DropDownItem>
        </a>
      </Link>
      
      <Link href={props.routeThree}>
        <a>
        <DropDownItem>{props.textThree}</DropDownItem>
        </a>
      </Link>

      <Link href={props.routeFour}>
        <a>
         <DropDownItem>{props.textFour}</DropDownItem>
        </a>
      </Link>

      <Link href={props.routeFive}>
        <a>
         <DropDownItem>{props.textFive}</DropDownItem>
        </a>
      </Link>
      
      
    </div>
  )
}

export default DropDown