
import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'
import NavItem from './NavItem'
import Menydropdown from './Menydropdown'
import DropDown from './DropDown'
import MenuNavItem from './MenuNavItem'





const Layout = ({children}) => {



  return (
    <>
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
        textTwo="Abhyanga" routeTwo ="Abhyanga"
        textThree="Shirodhara" routeThree="shirodhara"
        textFour="Marmabehandling" routeFour="marmabehandling"
        textFive="Övrigt" routeFive="övrigt"
        />       
      </NavItem>

      <NavItem text="Jordning" route="/jordning"/>
      <NavItem text="Om mig" route="/omMig"/>
      <NavItem text="Kontakt" route="/kontakt"/>
  

      <MenuNavItem text="Menu nav item">
        <Menydropdown 
        textOne="Hem" 
        textTwo="Ayurveda" 
        textThree="Behandlingar" 
        textFour="Om mig" 
        textFive="Kontakt" 
        textSix="Jordning"
        />
      </MenuNavItem>
      
    </Nav>
    <div className={styles.container}>
      {children}
    </div>
    

    </>
  )
}

export default Layout