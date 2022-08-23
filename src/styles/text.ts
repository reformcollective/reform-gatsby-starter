import { css } from "styled-components"

const fonts = {
  primary: "Roboto, sans-serif",
} as const

const text = {
  h1: css`
    ${fonts.primary}
  `,
  h2: css`
    ${fonts.primary}
  `,
  h3: css`
    ${fonts.primary}
  `,
} as const

export const strokeText = css`
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-size: 100%;
  background-clip: text;
  -webkit-text-stroke-width: 0.07vw;
`

export const strokeTextTransparent = css`
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-size: 100%;
  background-clip: text;
  -webkit-text-stroke-width: 0.07vw;
`

export const transparentText = css`
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-size: 100%;
  background-clip: text;
`

export default text
