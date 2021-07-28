// @flow

import { Node } from "react"
import styled from "styled-components"
import { ButtonLink as ButtonLinkBase } from "./ButtonLink"

const Wrapper = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    width: 4rem;
    height: 4rem;
  }
`

const ButtonLink = styled(ButtonLinkBase)`
  margin-top: 1rem;
`

export function LinkSection(props: {
  title: string,
  href: string,
  icon: any,
  className?: string,
  children: Node,
}) {
  const { title, href, icon, children } = props

  return (
    <Wrapper className={props.className}>
      {icon}
      <h1>{title}</h1>
      <div>{children}</div>
      <ButtonLink href={href}>READ MORE</ButtonLink>
    </Wrapper>
  )
}
