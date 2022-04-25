import { desktop, tablet, mobile } from "styles/media"

// default export
export const useMedia = <Type>(fw: Type, d: Type, t: Type, m: Type) => {
  if (typeof window !== "undefined") {
    if (window.innerWidth > desktop) {
      return fw
    } else if (window.innerWidth > tablet) {
      return d
    } else if (window.innerWidth > mobile) {
      return t
    } else if (window.innerWidth <= mobile) {
      return m
    }
  }

  return d
}
