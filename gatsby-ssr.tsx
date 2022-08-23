import "styles/typography.css"
import "styles/reset.css"
import React from "react"
import Providers from "components/Providers"
import PageLoader from "components/PageLoader"
// import type { GatsbyBrowser } from "gatsby"

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
  return <PageLoader>{element}</PageLoader>
}
