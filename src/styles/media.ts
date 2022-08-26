export const mobile = 375
export const tablet = 1024
export const desktop = 1440

const media = {
  // standard media queries
  mobile: `@media screen and (max-width: ${mobile}px)`,
  tablet: `@media screen and (min-width: ${
    mobile + 1
  }px) and (max-width: ${tablet}px)`,
  desktop: `@media screen and (min-width: ${
    tablet + 1
  }px) and (max-width: ${desktop}px)`,
  fullWidth: `@media screen and (min-width: ${desktop + 1}px)`,

  // raw versions for for use in gsap.matchMedia
  gsap: {
    mobile: `(max-width: ${mobile}px)`,
    tablet: `(min-width: ${mobile + 1}px) and (max-width: ${tablet}px)`,
    desktop: `(min-width: ${tablet + 1}px) and (max-width: ${desktop}px)`,
    fullWidth: `(min-width: ${desktop + 1}px)`,
  },

  // hover queries
  hover: "@media (hover: hover) ",
  noHover: "@media (hover: none) ",
} as const

export default media
