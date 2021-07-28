// @flow

import { Node } from "react"
import styled from "styled-components"

const Link = styled.a`
  position: relative;
  box-shadow: 0 0 0 3px black;
  border-right: 4px solid black;
  padding: 0.5rem 2rem;
  font-weight: bold;
  color: black;
  text-decoration: none;
  overflow: hidden;
  transition: background-color 0.3s, border 0.3s, color 0.3s;

  ::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 1.6rem;
    height: 200%;
    background-color: black;
    transform: skewX(15deg) translate(-5%, -5%);
  }
`

export function ButtonLink(props: {
  href: string,
  children: Node,
  className?: string,
}) {
  return (
    <Link role={"button"} href={props.href} className={props.className}>
      {props.children}
    </Link>
  )
}
