import { css } from "styled-components"

export const transparentText = css`
	/* stylelint-disable-next-line property-no-vendor-prefix  */
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	background-size: 100%;
	background-clip: text;
`

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
