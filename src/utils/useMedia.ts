import { useCallback, useEffect, useState } from "react"

import {
  desktopBreakpoint,
  tabletBreakpoint,
  mobileBreakpoint,
} from "styles/media"

import { isBrowser } from "./functions"

export default function useMedia<Type>(fw: Type, d: Type, t: Type, m: Type) {
  const handleUpdate = useCallback(() => {
    if (isBrowser()) {
      if (window.innerWidth > desktopBreakpoint) {
        setCurrent(fw)
      } else if (window.innerWidth > tabletBreakpoint) {
        setCurrent(d)
      } else if (window.innerWidth > mobileBreakpoint) {
        setCurrent(t)
      } else setCurrent(m)
    }
  }, [fw, d, t, m])

  const [current, setCurrent] = useState(d)

  useEffect(() => {
    handleUpdate()
  }, [handleUpdate])

  useEffect(() => {
    if (isBrowser()) {
      window.addEventListener("resize", handleUpdate)
      return () => window.removeEventListener("resize", handleUpdate)
    }
    return () => {}
  }, [handleUpdate])

  return current
}
