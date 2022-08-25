/* eslint-disable no-console */
import "styles/typography.css"
import "styles/reset.css"
import React from "react"

import gsap from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import BlueTransition from "components/BlueTransition"
import GreenTransition from "components/GreenTransition"
import Providers from "components/Providers"
// import type { GatsbyBrowser } from "gatsby"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const d = (t: string) => t.replace(/(\d+)(\D)/g, (_, c, h) => h.repeat(c))
const logo =
  "%c▄3█23▀172█▄450 4█26 69█4▀97█450 4█7 ▄5█▌14 14█15 █15 ▌14 3█12 3█15 █7 5█6 56█450 4█5 8█▌14 14█5 5#5 ▐6 9▀▌6 8▀█6 4▄6 █5 5#5 ▐9 █8 56█450 4█3 10█▌14 14█15 █15 ▌14 ▌6 4█6 █15 █18 56█450 4█2 ▐10█▌14 14█5 4█5 ╙█6 9▀▌6 10█14 2█5 4█5 ╟█5 ▐▄4 ▄▌5 56█450 4█2 11█▌14 14█5▄5█5▄█15▄▌6▄12█3▄4 3▄4█5▄5█5▄█6▄2█2▄2█6▄56█450 4█2 11█▌14 168█450 4█3 10█▌14 17█2▀7 2▀6█2▀7 2▀4█6 8█6 8█15 3█2▀7 2▀3█▌15 ▌5 █5 6█▀4 ║▌14 4█450 4█4 9█▌14 14█▌14 ╙2█15 2█6 8█6 8█6 9▄█15 ╟▌15 ▌5 █▌5 4█▀5 █▌5 9▄4█450 4█5 ▀7█▌14 14█6 5█5▄╫6 5█6 █6 8█6 8█14 ▐▌6 5█5▄5█6 5█▌5 2█▌5 2█▀5 2█▌14 4█450 4█8 ▀4█▌14 14█6 5▀5 █6 5▀5 2█13 █13 ▐6 9▀▌6 5▀5 5█6 5█▌5 3█▌5 ▀5 3█▌5 9▀4█450 4█28 15█▄12 ▄4█▄11 ▄3█13 █13 ▐15 2█▄12 ▄6█6 5█▌5 4█▌9 4█▌14 4█450 ▀198█▀"

console.log(
  d(logo),
  "background:#eee;color:black;font-size:3px;padding:20px;border-radius:20px;margin:10px"
)
console.log(
  d(logo),
  "background:black;color:white;font-size:3px;padding:20px;border-radius:20px;margin:10px"
)
console.log(
  `%c
          Designed & Developed by Reform Collective\n
                https://reformcollective.com\n\n`,
  ""
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
