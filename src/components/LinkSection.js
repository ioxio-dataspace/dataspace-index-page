// @flow

import {Node} from 'react'
import styled from "styled-components";
import {ButtonLink as ButtonLinkBase} from "./ButtonLink";

const Wrapper = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
`

const Description = styled.div`
`

const Icon = styled.img`
  width: 4rem;
`

const ButtonLink = styled(ButtonLinkBase)`
  margin-top: 1rem;
`


export function LinkSection(props: { title: string, href: string, icon: any, className?: string, children: Node }) {
    const {title, href, icon, children} = props

    return <Wrapper className={props.className}>
      <Icon src={icon} alt={`${title} icon`} />
        <Title>{title}</Title>
        <Description>{children}</Description>
        <ButtonLink href={href}>READ MORE</ButtonLink>
    </Wrapper>
}
