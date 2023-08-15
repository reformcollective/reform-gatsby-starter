import { addDebouncedEventListener, isBrowser } from "library/functions"
import { createContext, useEffect, useMemo, useState } from "react"
import {
  desktopBreakpoint,
  mobileBreakpoint,
  tabletBreakpoint,
} from "styles/media"

/**
 * Gives easy access to media queries
 */
export const ScreenContext = createContext({
  fullWidth: false,
  desktop: false,
  tablet: false,
  mobile: false,
})

interface Props {
  children: React.ReactNode
}

export function ScreenProvider({ children }: Props) {
  const [fw, setFw] = useState<boolean>(false)
  const [d, setD] = useState<boolean>(false)
  const [t, setT] = useState<boolean>(false)
  const [m, setM] = useState<boolean>(false)

  useEffect(() => {
    if (isBrowser()) {
      const setScreenContext = () => {
        setM(window.innerWidth <= mobileBreakpoint)
        setT(
          window.innerWidth > mobileBreakpoint &&
            window.innerWidth <= tabletBreakpoint,
        )
        setD(
          window.innerWidth > tabletBreakpoint &&
            window.innerWidth <= desktopBreakpoint,
        )
        setFw(window.innerWidth > desktopBreakpoint)
      }

      setScreenContext()

      return addDebouncedEventListener(window, "resize", setScreenContext, 100)
    }
  }, [])

  const screenValue = useMemo(() => {
    return { fullWidth: fw, desktop: d, tablet: t, mobile: m }
  }, [d, fw, t, m])

  return (
    <ScreenContext.Provider value={screenValue}>
      {children}
    </ScreenContext.Provider>
  )
}
