import "styles/fonts/typography.css"
import "the-new-css-reset/css/reset.css"

import Layout from "components/Layout"
import Providers from "components/Providers"
import { RenderBodyArgs } from "gatsby"

console.info(`
⣿⣿⠿⠟⠛⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⠏⠀⠀⠀⣿⣿⣿⣿⣿⡇⠀⠀⠀⢰⡶⠶⢶⣄⠀⠀⠀⠀⠀⣰⠶⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⠀⠀⠀⠀⣿⣿⣿⣿⣿⡇⠀⠀⠀⢸⣧⣤⣼⡟⣠⣚⣓⣦⡘⣿⠛⣢⡖⠛⢶⡄⣾⡖⠂⣿⠒⠻⣦⠚⢷⡄
⣿⣆⠀⠀⠀⣿⣿⣿⣿⣿⡇⠀⠀⠀⢸⡇⠀⢸⣿⠹⣍⣉⣭⠀⣿⠀⠹⣧⣀⣼⠇⣿⠀⠀⣿⠀⠀⣿⠀⢸⡇
⣿⣿⣶⣶⣤⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
   Designed & Developed by Reform Collective
         https://reformcollective.com
`)

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => {
  return <Providers>{element}</Providers>
}

export const wrapPageElement = ({ element }: { element: React.ReactNode }) => {
  return <Layout>{element}</Layout>
}

export const onRenderBody = ({ setHtmlAttributes }: RenderBodyArgs) => {
  setHtmlAttributes({
    lang: "en",
  })
}
