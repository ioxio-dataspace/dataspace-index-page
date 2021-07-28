// @flow

import { Node } from 'react'
import styled from 'styled-components'
import iconDLI from '../img/dli-logo.svg'
import { COMPONENT_NAME } from '../conf'
import { onMobile } from '../mixins'

const Wrapper = styled.div`
  text-align: center;
  position: relative;
  margin: 1rem 5rem 1rem 5rem;
  padding: 6rem 3rem;
  background-color: rgba(186, 186, 186, 0.3);
  overflow: hidden;

  ::before {
    content: '';
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

const Logo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 10rem;
`

const ComponentDescription = styled.div`
`

export function Hero () {
  return (
    <Wrapper>
      <Logo src={iconDLI} alt='logo' />
      <h1>{COMPONENT_NAME}</h1>
      <ComponentDescription>
        {COMPONENT_NAME} is a part of _NEXUS_ stack, and can not be accessed
        directly.
      </ComponentDescription>
    </Wrapper>
  )
}
