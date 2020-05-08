import React from "react";
import styled from "styled-components";
import { NextSection, SectionTitle } from "../components";


const Wrapper = styled.div`
  height: 100%;
  padding: 5vw;
`

const About = (props) => {
  return(
    <div className="section" style={{position: "relative"}}>
      <Wrapper>
        <SectionTitle>
          About.
        </SectionTitle>
        <NextSection />
      </Wrapper>
    </div>
  )
}

export default About
