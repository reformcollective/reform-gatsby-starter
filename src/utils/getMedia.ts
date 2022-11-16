import {
  desktopBreakpoint,
  tabletBreakpoint,
  mobileBreakpoint,
} from "styles/media"

export default function getMedia<Type>(fw: Type, d: Type, t: Type, m: Type) {
  if (typeof window !== "undefined") {
    if (window.innerWidth > desktopBreakpoint) {
      return fw
    }
    if (window.innerWidth > tabletBreakpoint) {
      return d
    }
    if (window.innerWidth > mobileBreakpoint) {
      return t
    }
    if (window.innerWidth <= mobileBreakpoint) {
      return m
    }
  }

  return d
}
