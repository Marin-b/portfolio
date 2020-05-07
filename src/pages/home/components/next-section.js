import React from "react";
import styled from "styled-components";
import { Chevron } from "../../../components"
import { fadeIn } from "./animations"

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 0);
  opacity: 0;
  animation: ${fadeIn} 1s ease-in;
  animation-fill-mode: forwards;
  animation-delay: 2s;
`


const NextSection = (props) => {
  return(
    <ArrowContainer onClick={props.next}>
      <Chevron color={props.color}/>
    </ArrowContainer>
  )
}

export default NextSection
