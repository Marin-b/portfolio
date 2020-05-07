import React from "react";
import styled from "styled-components"

import { NextSection } from "../components"

const Wrapper = styled.div`
  height: 100%;
  padding: 5vw;
`

const SectionTitle = styled.div`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: bold;
`

const Project = (props) => {
  return(
    <div className="section" style={{position: 'relative'}}>
      <Wrapper>
        <SectionTitle>
          Projects.
        </SectionTitle>
        <NextSection color="black" />
      </Wrapper>
    </div>
  )
}

export default Project
