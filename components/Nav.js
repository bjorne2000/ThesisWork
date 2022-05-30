
import Link from 'next/link'
import styles from '../styles/Nav.module.css'
import Menydropdown from './Menydropdown'

const Nav = (props) => {
  return (
    <nav className={styles.nav}>

      <ul className={styles.ul}>
        {props.children}

      </ul>
    </nav>
  )
}

export default Nav