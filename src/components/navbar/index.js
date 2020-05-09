import React, { useContext } from "react";
import styled from "styled-components"
import BurgerCross from "./burgercross"
import Menu from "./menu"
import { PopupContext } from "../../App"

const Nav = styled.div`
  position: absolute;
  right: 5vw;
  top: calc(5vw + 1em);
  transition: top 1s ease 0s;
`

const Navbar = (props) => {
   const { popupContent, setPopupContent } = useContext(PopupContext)

  const NavMenu = () => <Menu close={() => setPopupContent(undefined)} />

  const togglePopup = () => {
    popupContent ? setPopupContent(undefined) : setPopupContent(NavMenu)
  }


  return(
    <Nav >
      <BurgerCross clicked={popupContent} onClick={togglePopup}/>
    </Nav>
  )
}

export default Navbar
