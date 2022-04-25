import { useMedia } from "utils/hooks"

const text = {
  h1: useMedia(``, ``, ``, ``),
  h2: useMedia(``, ``, ``, ``),
  h3: useMedia(``, ``, ``, ``),
  h4: useMedia(``, ``, ``, ``),
  h5: useMedia(``, ``, ``, ``),
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
