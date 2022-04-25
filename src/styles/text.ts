import { useMedia } from "utils/hooks"

//TODO replace text with proper sizes

const text = {
  h1: useMedia(`
    //fullwidth
    font-size: 50px;
  `, `
    //desktop
    font-size: 3.472vw;
  `, `
    //tablet
    font-size: 5.995vw;
  `, `
    //mobile
    font-size: 13.333vw;
  `),
  h2: useMedia(`
    //fullwidth
    font-size: 50px;
  `, `
    //desktop
    font-size: 3.472vw;
  `, `
    //tablet
    font-size: 5.995vw;
  `, `
    //mobile
    font-size: 13.333vw;
  `),
  h3: useMedia(`
    //fullwidth
    font-size: 50px;
  `, `
    //desktop
    font-size: 3.472vw;
  `, `
    //tablet
    font-size: 5.995vw;
  `, `
    //mobile
    font-size: 13.333vw;
  `),
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
