import { Helmet } from "react-helmet"
import { COMPONENT_NAME, NEXUS_NAME } from "./conf"
import React from "react"

export function SEO() {
  const description = `${COMPONENT_NAME} is a part of ${NEXUS_NAME}`
  return (
    <Helmet>
      <title>{COMPONENT_NAME}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}
