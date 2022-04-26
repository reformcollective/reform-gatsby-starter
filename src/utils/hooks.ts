import { useEffect, useState } from "react"
import { desktop, tablet, mobile } from "styles/media"
import { isBrowser } from "./functions"

export const useMediaHook = <Type>(fw: Type, d: Type, t: Type, m: Type) => {
  const [current, setCurrent] = useState(d)

  useEffect(() => {
    function handleUpdate() {
      if (isBrowser()) {
        if (window.innerWidth > desktop) {
          setCurrent(fw)
        } else if (window.innerWidth > tablet) {
          setCurrent(d)
        } else if (window.innerWidth > mobile) {
          setCurrent(t)
        } else if (window.innerWidth <= mobile) {
          setCurrent(m)
        }
      }
    }

    if (isBrowser()) {
      window.addEventListener("resize", handleUpdate)
      return () => window.removeEventListener("resize", handleUpdate)
    }

    handleUpdate()
  })

  return current
}

export const useMediaFunction = <Type>(fw: Type, d: Type, t: Type, m: Type) => {
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
