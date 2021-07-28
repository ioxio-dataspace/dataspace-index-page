import React from "react"
import { hydrate, render } from "react-dom"

import { MainScreen } from "./containers/Main"

import "./global.css"

const rootElement = document.getElementById("root")
if (rootElement.hasChildNodes()) {
  hydrate(<MainScreen />, rootElement)
} else {
  render(<MainScreen />, rootElement)
}
