// @flow

import styled from "styled-components"
import { ReactComponent as IconDLI } from "../img/dli-logo.svg"
import { COMPONENT_NAME, NEXUS_NAME } from "../conf"

const Wrapper = styled.div`
  text-align: center;
  position: relative;
  margin: 1rem 5rem 1rem 5rem;
  padding: 6rem 3rem;
  background-color: rgba(186, 186, 186, 0.3);
  overflow: hidden;

  ::before {
    content: "";
    position: absolute;
    background-color: rgba(186, 186, 186, 0.6);
    z-index: -100;
    top: 0;
    left: 80%;
    height: 100%;
    width: 50%;
    transform: skewX(15deg);
  }
`

const Logo = styled(IconDLI)`
  position: absolute;
  top: 0;
  left: 0;
  width: 10rem;
  height: 10rem;
  transform: translateY(-15%);
`

const ComponentDescription = styled.div``

export function Hero() {
  return (
    <Wrapper>
      <Logo alt="logo" />
      <h1>{COMPONENT_NAME}</h1>
      <ComponentDescription>
        {COMPONENT_NAME} is a part of {NEXUS_NAME} stack, and can not be accessed
        directly.
      </ComponentDescription>
    </Wrapper>
  )
}
