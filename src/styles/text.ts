import { leadingTrim } from "leading-trim"
import { css } from "styled-components"

export const transparentText = css`
	/* stylelint-disable-next-line property-no-vendor-prefix  */
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	background-size: 100%;
	background-clip: text;
`

// TODO: update these values to match the font you're using
export const trim = (lineHeight: number) =>
	leadingTrim({
		lineHeight, // unitless `line-height` that you want for the text
		reference: {
			// reference numbers for the `@font-face` you'll use
			fontSize: 160, // `font-size` in px
			lineHeight: 1, // unitless `line-height`
			topCrop: 26, // height to remove from the top in px
			bottomCrop: 21, // height to remove from the bottom in px
		},
	})

export const clampText = (lines: number) => css`
	overflow: hidden;
	text-overflow: ellipsis;
	/* stylelint-disable-next-line property-no-vendor-prefix  */
	-webkit-text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: ${lines};
`

const textStyles = {
	h1: css``,
	h2: css``,
	h3: css``,
	body: css``,
}

export default textStyles
