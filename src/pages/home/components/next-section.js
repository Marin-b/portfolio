import React, { useContext } from "react";
import styled from "styled-components";

import { Chevron } from "../../../components"
import { fadeIn } from "./animations"
import { FullpageContext } from "../index"

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 3vw;
  left: 50%;
  transform: translate(-50%, 0);
  opacity: 0;
  animation: ${fadeIn} 1s ease-in;
  animation-fill-mode: forwards;
  animation-delay: 2s;
`


const NextSection = (props) => {
  const fullPageApi = useContext(FullpageContext);

  const next = () => {
    fullPageApi.moveSectionDown()
  }
  return(
    <ArrowContainer onClick={next}>
      <Chevron color={props.color}/>
    </ArrowContainer>
  )
}

export default NextSection
