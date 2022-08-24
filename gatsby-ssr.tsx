import "styles/typography.css"
import "styles/reset.css"
import React from "react"

import GreenTransition from "components/GreenTransition"
import Providers from "components/Providers"
import RedTransition from "components/RedTransition"
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
      <RedTransition />
      <GreenTransition />
      {element}
    </div>
  )
}
