import { createGlobalStyle } from "styled-components"

/**
 * place all your colors here! the format is:
 * [hex color, optional p3 color]
 *
 * if you provide a p3 color, it will be used where supported
 */
const rawColors = {
	white: ["white"],
	red: ["red", "color(display-p3 1 0 0)"],
} as const satisfies Record<string, [string, string] | [string]>

export const ColorStyle = createGlobalStyle`
	:root {
		@supports (not (color: color(display-p3 0 0 0))) {
			${Object.entries(rawColors).map(([key, [hex]]) => {
				return `--${key}: ${hex};`
			})}
		}

		@supports (color: color(display-p3 0 0 0)) {
			${Object.entries(rawColors).map(([key, [hex, p3]]) => {
				return `--${key}: ${p3 ?? hex};`
			})}
		}
	}
`

/**
 * convert the raw colors to an object with the correct color for the current browser
 */
const CSSColors = Object.fromEntries(
	Object.entries(rawColors as Record<string, [string, string] | [string]>).map(
		([key]) => {
			return [key, `var(--${key})`]
		},
	),
) as {
	[key in keyof typeof rawColors]: `var(--${key})`
}

/**
 * gsap can't animate variables, so we need to use the hex always
 */
const jsColors = Object.fromEntries(
	Object.entries(rawColors as Record<string, [string, string] | [string]>).map(
		([key, [color]]) => {
			return [key, color]
		},
	),
) as {
	[key in keyof typeof rawColors]: (typeof rawColors)[key][0]
}

export default {
	...CSSColors,
	js: jsColors,
}
