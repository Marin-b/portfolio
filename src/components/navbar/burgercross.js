import React from "react";
import styled from "styled-components";

const BurgerDiv = styled.div`
  width: 2em;
  height: 2em;
  position: relative;
  cursor: pointer;
  display: inline-block;
  z-index: 1000;
`;

const FirstLine = styled.span`
  background-color: black;
  position: absolute;
  border-radius: 2px;
  transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  width: 100%;
  height: 2px;
  transition-duration: 500ms;
  top: 0px;
  left: 0px;

  ${(props) =>
    props.clicked ? "transform: rotate(45deg); top: 11px; width: 70%; left: 4px;" : ""};
`;
const SecondLine = styled.span`
  background-color: black;
  position: absolute;
  border-radius: 2px;
  transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  width: 100%;
  height: 2px;
  transition-duration: 500ms;
  top: calc(50% - 1px);
  left: 0px;

  ${(props) => (props.clicked ? "transform: scale(0);" : "transform: scale(1)")};
`;
const ThirdLine = styled.span`
  background-color: black;
  position: absolute;
  border-radius: 2px;
  transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  width: 100%;
  height: 2px;
  transition-duration: 500ms;
  bottom: 0px;
  left: 0px;

  ${(props) =>
    props.clicked ? "transform: rotate(-45deg); top: 11px; width: 70%; left: 4px;" : ""};
`;

const BurgerCross = ({ onClick, clicked }) => (
  <BurgerDiv onClick={onClick}>
    <FirstLine clicked={clicked} />
    <SecondLine clicked={clicked} />
    <ThirdLine clicked={clicked} />
  </BurgerDiv>
);

export default BurgerCross;
