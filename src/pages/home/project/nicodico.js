import React from "react";
import styled from "styled-components";
import BannerImg from "../../../assets/NicoDico_Banner.png"
import { SectionTitle } from "../components"

const Wrapper = styled.div`
  height: 100%;
  width: 90%;
`
const Content = styled.div`
  width: 100%;
  padding-top: 20px;
`

const NicoDico = (props) => {
  return(
     <Wrapper>
       <SectionTitle noborder>
         NicoDico.
       </SectionTitle>
       <Content>
          <img src={BannerImg} style={{width: '100%'}} alt=""/>
       </Content>

     </Wrapper>
  )
}

export default NicoDico
