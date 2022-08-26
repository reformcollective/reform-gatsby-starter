import { css, FlattenSimpleInterpolation } from "styled-components"

import media, { mobile, tablet, desktop } from "styles/media"

const PRECISION = 3

const replacer = (match: string, breakpoint: number) => {
  return ((parseInt(match, 10) / breakpoint) * 100).toFixed(PRECISION)
}

/**
 * takes in css containing pixel values and generates scaling media queries using the breakpoints
 * @param cssIn
 * @returns
 */
export default function fullyResponsive(
  cssIn: FlattenSimpleInterpolation | string
) {
  // if not a string, convert to string
  const cssAsString = typeof cssIn === "string" ? cssIn : cssIn.join("\n")
  const onlyPxValues = cssAsString
    .split(";")
    .filter(x => x.includes("px") && !x.includes("@"))
    .join(";")

  // generate media queries for each breakpoint
  const out = css`
    ${cssAsString}
    ${media.desktop} {
      ${onlyPxValues.replace(
        /(\d+)px/g,
        (_, px) => `${replacer(px, desktop)}vw`
      )}
    }
    ${media.tablet} {
      ${onlyPxValues.replace(
        /(\d+)px/g,
        (_, px) => `${replacer(px, tablet)}vw`
      )}
    }
    ${media.mobile} {
      ${onlyPxValues.replace(
        /(\d+)px/g,
        (_, px) => `${replacer(px, mobile)}vw`
      )}
    }
  `
  return out
}
