import React from "react";
import styled, { keyframes } from "styled-components"

const Bounce = keyframes`
  0%, 4%, 10%, 16%, 100% {
    transform: translateY(0);
  }
  8% {
    transform: translateY(-30px);
  }
  12% {
    transform: translateY(-15px);
  }
`

const Arrow = styled.span`
 color: ${props => props.color ? props.color : props.theme.colors.primary};
 font-size: ${props => props.theme.fontSizes.medium};
 animation: ${Bounce} 10s linear infinite;
`

const Chevron = (props) => <Arrow onClick={props.action} color={props.color} className="iconify" data-icon="entypo-chevron-thin-down" data-inline="false"></Arrow>


export default Chevron
