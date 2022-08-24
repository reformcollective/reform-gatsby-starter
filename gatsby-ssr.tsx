import "styles/typography.css"
import "styles/reset.css"
import React from "react"

import BlueTransition from "components/BlueTransition"
import GreenTransition from "components/GreenTransition"
import Providers from "components/Providers"
// import type { GatsbyBrowser } from "gatsby"

// eslint-disable-next-line no-console
console.log(`
⣿⣿⠿⠟⠛⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⠏⠀⠀⠀⣿⣿⣿⣿⣿⡇⠀⠀⠀⢰⡶⠶⢶⣄⠀⠀⠀⠀⠀⣰⠶⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⠀⠀⠀⠀⣿⣿⣿⣿⣿⡇⠀⠀⠀⢸⣧⣤⣼⡟⣠⣚⣓⣦⡘⣿⠛⣢⡖⠛⢶⡄⣾⡖⠂⣿⠒⠻⣦⠚⢷⡄
⣿⣆⠀⠀⠀⣿⣿⣿⣿⣿⡇⠀⠀⠀⢸⡇⠀⢸⣿⠹⣍⣉⣭⠀⣿⠀⠹⣧⣀⣼⠇⣿⠀⠀⣿⠀⠀⣿⠀⢸⡇
⣿⣿⣶⣶⣤⣿⣿⣿⣿⣿⡇
    Designed & Developed by Reform Collective
         https://reformcollective.com
`)

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
