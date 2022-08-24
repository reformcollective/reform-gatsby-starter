import "styles/typography.css"
import "styles/reset.css"
import React from "react"

import gsap from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { css } from "styled-components"

import BlueTransition from "components/BlueTransition"
import GreenTransition from "components/GreenTransition"
import Providers from "components/Providers"
// import type { GatsbyBrowser } from "gatsby"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// eslint-disable-next-line no-console
console.log(
  `%c
Designed & Developed by Reform Collective
       https://reformcollective.com      `,
  "margin-bottom: 20px; color: white; width: 100px; text-align: center;"
)

const manySpaces = " ".repeat(450)

// eslint-disable-next-line no-console
console.log(
  `%c████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████${manySpaces}████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████${manySpaces}████           ▄▄▄            ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████${manySpaces}████       ▄█████▌             ███████████████               █               ▌              ██▀            ▀██               █      ▀████▀     ▐████████████████████████████████████████████████████████${manySpaces}████    ▄████████▌             ▐██████████████     ▐███▌     ▐       █████████      █████████     ▄████▄     █     ▓███▌     ▐        ██       ▐████████████████████████████████████████████████████████${manySpaces}████   ▓█████████▌              ██████████████               █              ▐▌              ▌     ██████     █               █                 ▐████████████████████████████████████████████████████████${manySpaces}████  ▐██████████▌              ██████████████     ▐███     ▀█       █████████     ▐█████████▄              ██     ████     ▀█     ▐▄    ▄▌    ▐████████████████████████████████████████████████████████${manySpaces}████  ███████████▌              ██████████████▄▄▄▄▄█████▄▄▄▄▄█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█▄▄▄▄▄▄████████████▄▄▄▄▄▄▄▄▄▄████▄▄▄▄▄█████▄▄▄▄▄█▄▄▄▄▄███▄▄██▌▄▄▄▄▄████████████████████████████████████████████████████████${manySpaces}████  ███████████▌              ████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████${manySpaces}████  ▐██████████▌              █████████████████▀▀      ▀▀▀██████▀▀      ▀▀▀███▌     █████████      ████████▀              ███▀▀      ▀▀▀███▌               ▌    ▀█     ██████▀    ▐▌              ████${manySpaces}████   ▀█████████▌              ██████████████▌               ██               █▌     ▐████████      ████████       ▄▄▄▄▄▄▄▄█               ▀▌               ▌     █▌     ████▀     █▌      ▄▄▄▄▄▄▄▄████${manySpaces}████     ▀███████▌              ██████████████     ██████▄▄▄▄▄█     ██████     ▐▌     ▐████████      ████████              ▐▌    ▐██████▄▄▄▄▄█████      █████▌     ██▌     ██     ▐██▌              ████${manySpaces}████        ▀████▌              ██████████████▄     ████▀     █▄     ████▀     █▌             █             ▐      ▐▓▓▓▓▓▓▓█▌     ████▀     ▐█████      █████▌     ███▌          ▄███▌     ▐▓▓▓▓▓▓▓█████${manySpaces}████                            ███████████████▄▄           ▄████▄           ▄██▌             █             ▐               ██▄           ▄▄██████      █████▌     ████▌        ▄████▌              ████${manySpaces}████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████${manySpaces}████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████`,
  css`
    background: black;
    color: white;
    font-size: 3px;
  `.toString()
)

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => {
  return <Providers>{element}</Providers>
}

export const wrapPageElement = ({ element }: { element: React.ReactNode }) => {
  return (
    <div>
      <BlueTransition />
      <GreenTransition />
      {element}
    </div>
  )
}
