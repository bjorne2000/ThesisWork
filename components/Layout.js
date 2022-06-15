
import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'
import NavItem from './NavItem'
import Menydropdown from './Menydropdown'
import DropDown from './DropDown'
import MenuNavItem from './MenuNavItem'





const Layout = ({children}) => {



  return (
    <div className={styles.bigBoi}>
    <Nav>
      <NavItem text="Hem" route="/home"/>

      <NavItem text="Ayurveda">
        <DropDown 
        textOne="Vad är Ayurveda?" routeOne="/ayurvedaInfo" 
        textTwo="Vata" routeTwo="/vata" 
        textThree="Pita" routeThree="/pita"
        textFour="Kapha" routeFour="/kapha"
        textFive="Vilken dosha tillhör du?" routeFive="/dosha"
        />       
      </NavItem>

      <NavItem text="Behandlingar">
        <DropDown 
        textOne="Ayurvedisk hälsorådgivning" routeOne ="/radgivning"
        textTwo="Abhyanga" routeTwo ="abhyanga"
        textThree="Shirodhara" routeThree="shirodhara"
        textFour="Marmabehandling" routeFour="marma"
        textFive="Övrigt" routeFive="ovrigt"
        />       
      </NavItem>

      <NavItem text="Jordning" route="/jordning"/>
      <NavItem text="Boka" route="/boka"/>
      <NavItem text="Om mig" route="/omMig"/>
      <NavItem text="Kontakt" route="/kontakt"/>
  

      <MenuNavItem text="Xlängre text">
        <Menydropdown 
        textOne="Hem" 
        textTwo="Ayurveda" 
        textThree="Behandlingar" 
        textFour="Boka" 
        textFive="Kontakt" 
        textSix="Jordning"
        textSeven="Om mig"
        />
      </MenuNavItem>
      
    </Nav>
    <div className={styles.container}>
      {children}
    </div>
    

    </div>
  )
}

export default Layout