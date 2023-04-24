import { css } from "styled-components"

const textStyles = {
  h1: css``,
  h2: css``,
  h3: css``,
}

export const strokeText = css`
  /* styled doesn't prefix this property yet */

  /* stylelint-disable property-no-vendor-prefix */
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-size: 100%;
  background-clip: text;
  -webkit-text-stroke-width: 0.07vw;
`

export default textStyles
