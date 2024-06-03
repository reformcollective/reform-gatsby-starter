/* eslint-disable ssr-friendly/no-dom-globals-in-module-scope */
import "styles/fonts/typography.css"
import "the-new-css-reset/css/reset.css"

import Userback from "@userback/widget"
import Layout from "components/Layout"
import { RootProviders, RouteProviders } from "components/Providers"
import gsap from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger"

/**
 * global plugin registration. be sure to also register plugins in gatsby-ssr.ts so that they are available during SSR
 */
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

/**
 * render the Reform Collective logo in the console
 */
const d = (t: string) =>
	t.replaceAll(/(\d+)(\D)/g, (_, c: number, h: string) => h.repeat(c))
const logo =
	"%c▄3█23▀172█▄553 4█26 69█4▀97█553 4█7 ▄5█▌14 14█15 █15 ▌14 3█12 3█15 █7 5█6 56█553 4█5 8█▌14 14█5 5#5 ▐6 9▀▌6 8▀█6 4▄6 █5 5#5 ▐9 █8 56█553 4█3 10█▌14 14█15 █15 ▌14 ▌6 4█6 █15 █18 56█553 4█2 ▐10█▌14 14█5 4█5 ╙█6 9▀▌6 10█14 2█5 4█5 ╟█5 ▐▄4 ▄▌5 56█553 4█2 11█▌14 14█5▄5█5▄█15▄▌6▄12█3▄4 3▄4█5▄5█5▄█6▄2█2▄2█6▄56█553 4█2 11█▌14 168█553 4█3 10█▌14 17█2▀7 2▀6█2▀7 2▀4█6 8█6 8█15 3█2▀7 2▀3█▌15 ▌5 █5 6█▀4 ║▌14 4█553 4█4 9█▌14 14█▌14 ╙2█15 2█6 8█6 8█6 9▄█15 ╟▌15 ▌5 █▌5 4█▀5 █▌5 9▄4█553 4█5 ▀7█▌14 14█6 5█5▄╫6 5█6 █6 8█6 8█14 ▐▌6 5█5▄5█6 5█▌5 2█▌5 2█▀5 2█▌14 4█553 4█8 ▀4█▌14 14█6 5▀5 █6 5▀5 2█13 █13 ▐6 9▀▌6 5▀5 5█6 5█▌5 3█▌5 ▀5 3█▌5 9▀4█553 4█28 15█▄12 ▄4█▄11 ▄3█13 █13 ▐15 2█▄12 ▄6█6 5█▌5 4█▌9 4█▌14 4█553 ▀198█▀"
console.info(
	d(logo),
	`font-family:monospace;display:inline-block;background:black;color:#eee;${
		window.safari
			? "font-size:5px"
			: "font-size:3px;padding:20px;border-radius:20px;margin:10px"
	}`,
)
console.info(
	`%c
          Designed & Developed by Reform Collective\n
                https://reformcollective.com\n\n`,
	"",
)

/**
 * these will only mount once, and will never unmount
 * this cannot contain UI
 */
export const wrapRootElement = ({ element }: { element: React.ReactNode }) => {
	return <RootProviders>{element}</RootProviders>
}

/**
 * these will unmount and remount on every route change
 */
export const wrapPageElement = ({ element }: { element: React.ReactNode }) => {
	return (
		<RouteProviders>
			<Layout>{element}</Layout>
		</RouteProviders>
	)
}

// disable GSAP's null target warning
gsap.config({
	nullTargetWarn: false,
})

/**
 * userback, only if the URL includes 'netlify'
 */
if (typeof window !== "undefined" && window.location.href.includes("netlify"))
	Userback("A-v0IzZWe1Wp6WdUZsgSwl1T41O")
