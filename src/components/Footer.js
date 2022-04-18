// @flow

import { Node } from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  background-color: black;
  color: white;
  text-align: center;
  padding: 2rem;
`

export function Footer(): Node {
  return (
    <FooterWrapper>
      <div>Copyright © IOXIO®</div>
    </FooterWrapper>
  )
}
