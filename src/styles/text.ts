//TODO replace text with proper sizes

import media from "./media"

const fonts = {
  primary: "",
  secondary: "",
}

const text = {
  h1: `
    ${fonts.primary}
    color: orange;
    ${media.desktop} {
      color: red;
    }
    ${media.tablet} {
      color: green;
    }
    ${media.mobile} {
      color: blue;
    }
  `,
  h2: `
    ${fonts.primary}
    color: orange
    ${media.desktop} {
      color: red;
    }
    ${media.tablet} {
      color: green;
    }
    ${media.mobile} {
      color: blue;
    }
  `,
  h3: `
    ${fonts.primary}
    color: orange
    ${media.desktop} {
      color: red;
    }
    ${media.tablet} {
      color: green;
    }
    ${media.mobile} {
      color: blue;
    }
  `,
}

export const strokeText = `
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-size: 100%;
  background-clip: text;
  -webkit-text-stroke-width: 0.07vw;
`
export const strokeTextTransparent = `
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-size: 100%;
  background-clip: text;
  -webkit-text-stroke-width: 0.07vw;
`

export const transparentText = `
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-size: 100%;
  background-clip: text;
 
`

export default text
