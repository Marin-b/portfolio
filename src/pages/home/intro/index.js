import React, { useEffect, useState, useRef } from "react";
import styled, { withTheme, keyframes } from "styled-components"

import { NextSection, fadeIn } from "../components"
import introAnimation from "./animation"

const Canvas = styled.canvas`
  position: absolute;
  top: 0px;
  left:0px;
  z-index: -1;
  opacity: 0.4;
  color: ${props => props.theme.colors.secondary}
`

const TitleContainer = styled.div`
  color: ${props => props.theme.colors.dark};
  font-size: ${ props => props.theme.fontSizes.large};
  font-family: ${props => props.theme.fonts[0]};
  font-weight: 200;
  padding: 0px 5%;
  animation: ${fadeIn} 2s ease-in;
`

const TitleEmphasis = styled.span`
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`

const Intro = (props) => {
  const canvas = useRef(null)
  const [anim, setAnim] = useState(undefined)
  const [height, setHeight] = useState(window.innerHeight)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    ctx.fillStyle = props.theme.colors.dark
    const animation = introAnimation(ctx, width, height)
    setAnim(animation)

    window.addEventListener("resize", () => {
      setHeight(window.innerHeight)
      setWidth(window.innerWidth)
      animation.sizeUpdate(window.innerWidth, window.innerHeight)
    })

    return animation.pause
  }, [])

  useEffect(() => {
    if (!anim) { return }
    props.active ? anim.unpause() : anim.pause()
  }, [props.active, anim])


  return(
    <div className="section" style={{position: 'relative'}}>
      <Canvas height={height} width={width} ref={canvas} />
        <TitleContainer>
          Hello, I am {' '}
          <TitleEmphasis>
            Marin Bibot.
          </TitleEmphasis>
          <br/>
          A full-stack web developer.
        </TitleContainer>
        <NextSection />
    </div>
  )
}

export default withTheme(Intro)
