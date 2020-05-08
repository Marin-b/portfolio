import React from "react";
import styled from "styled-components";


const Title = styled.div`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: bold;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  width: 100%;
  width: 400px;
  @media (max-width: ${props => props.theme.splitTreshold}px) {
    width: 100%;
  }
`


const SectionTitle = (props) => {
  return(
    <Title>
      {props.children}
    </Title>
  )
}

export default SectionTitle
