import React, { useState, useEffect, useContext } from "react";
import styled, { keyframes } from "styled-components"

import { PopupContext } from "../App"

export const fadeIn = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
  }

  to {
    opacity: 1;
    visibility: visible;
  }
`;


export const fadeOut = keyframes`
  from {
    opacity: 1;
    visibility: visible;
  }

  to {
    opacity: 0;
    visibility: hidden;
  }
`;


const Wrapper = styled.div`
  position: ${props => props.pos ? props.pos : "fixed"};
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 500;
  background-color: white;
  animation: ${props => props.show ? fadeIn : fadeOut} 0.5s;
  animation-fill-mode: forwards;
  padding: 5vw;
  box-sizing: border-box;
`

const Popup = (props) => {
  const { popupContent } = useContext(PopupContext)

  return(
    <Wrapper pos={props.pos} show={popupContent} id="popup">
      { popupContent }
    </Wrapper>
  )
}

export default Popup
