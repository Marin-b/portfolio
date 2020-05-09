import React, { useContext } from "react";
import styled from "styled-components";

import { PopupContext } from "../../App"
import YouAreHere from "../../assets/you_are_here.png"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 90%;
  width: 100%;
  align-items: start;
`

const MenuItem = styled.a`
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.current ? props.theme.colors.primary : props.theme.colors.dark};
  text-decoration: none;
  position: relative;

  &:after {
    ${props => props.current ? 'content: ""' : ''};
    background-image: url(${YouAreHere});
    background-size: contain;
    background-repeat: no-repeat;
    height: ${window.innerWidth / 10}px;
    width: ${window.innerWidth / 10}px;
    min-height: 120px;
    min-width: 120px;
    display: inline-block;
    position: absolute;
    top: 10%;
    left: calc(100% + ${window.innerWidth / 30}px);
  }

`
const Menu = (props) => {
  const { popupContent  } = useContext(PopupContext)

  return(
    <Wrapper>
      <MenuItem href="#intro" current={window.location.hash === "#intro"} onClick={props.close}>Intro</MenuItem>
      <MenuItem href="#about" current={window.location.hash === "#about"} onClick={props.close}>About</MenuItem>
      <MenuItem href="#projects" current={window.location.hash === "#projects"} onClick={props.close}>Projects</MenuItem>
      <MenuItem href="#contact" current={window.location.hash === "#contact"} onClick={props.close}>Contact</MenuItem>
    </Wrapper>
  )
}

export default Menu
