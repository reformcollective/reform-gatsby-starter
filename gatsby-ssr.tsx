import "styles/fonts/typography.css"
import "the-new-css-reset/css/reset.css"

import Layout from "components/Layout"
import { RootProviders, RouteProviders } from "components/Providers"
import type { RenderBodyArgs } from "gatsby"
import gsap from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger"

/**
 * global plugin registration.
 */
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

console.info(`
⣿⣿⠿⠟⠛⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⠏⠀⠀⠀⣿⣿⣿⣿⣿⡇⠀⠀⠀⢰⡶⠶⢶⣄⠀⠀⠀⠀⠀⣰⠶⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⠀⠀⠀⠀⣿⣿⣿⣿⣿⡇⠀⠀⠀⢸⣧⣤⣼⡟⣠⣚⣓⣦⡘⣿⠛⣢⡖⠛⢶⡄⣾⡖⠂⣿⠒⠻⣦⠚⢷⡄
⣿⣆⠀⠀⠀⣿⣿⣿⣿⣿⡇⠀⠀⠀⢸⡇⠀⢸⣿⠹⣍⣉⣭⠀⣿⠀⠹⣧⣀⣼⠇⣿⠀⠀⣿⠀⠀⣿⠀⢸⡇
⣿⣿⣶⣶⣤⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
   Designed & Developed by Reform Collective
         https://reformcollective.com
`)

export const onRenderBody = ({ setHtmlAttributes }: RenderBodyArgs) => {
	setHtmlAttributes({
		lang: "en",
	})
}

/**
 * these should match gatsby-browser.tsx exactly
 */
export const wrapRootElement = ({ element }: { element: React.ReactNode }) => {
	return <RootProviders>{element}</RootProviders>
}

export const wrapPageElement = ({ element }: { element: React.ReactNode }) => {
	return (
		<RouteProviders>
			<Layout>{element}</Layout>
		</RouteProviders>
	)
}
