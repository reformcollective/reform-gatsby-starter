import { leadingTrim } from "leading-trim"
import { css } from "styled-components"

export const transparentText = css`
  /* stylelint-disable-next-line property-no-vendor-prefix  */
  -webkit-background-clip: text;
    /* stylelint-disable-next-line property-no-vendor-prefix  */
  -webkit-text-fill-color: transparent;
    /* stylelint-disable-next-line property-no-vendor-prefix  */
  -moz-text-fill-color: transparent;
  background-size: 100%;
  background-clip: text;
`

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
    /* stylelint-disable-next-line property-no-vendor-prefix  */
  -webkit-box-orient: vertical;
    /* stylelint-disable-next-line property-no-vendor-prefix  */
  -webkit-line-clamp: ${lines};
`

const textStyles = {
	h1: css``,
	h2: css``,
	h3: css``,
	body: css``,
}

export default textStyles
