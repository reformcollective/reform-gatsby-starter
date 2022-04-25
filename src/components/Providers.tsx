import React, { createContext, useState, useEffect } from "react"
import { desktop, tablet, mobile } from "styles/media"
import { addDebouncedEventListener, isBrowser } from "utils/functions"
import PageLoader from "./PageLoader"

export const ScreenContext = createContext({
  fullWidth: false,
  desktop: false,
  tablet: false,
  mobile: false,
})

export const SubscribeFormOpenContext = createContext<{
  open: boolean
  setOpen: Function
}>({ open: false, setOpen: () => false })

export const LoaderContext = createContext<{
  load: string
  setLoad: Function
  loaderIsReady: boolean
  setLoaderIsReady: Function
}>({
  load: "",
  setLoad: () => false,
  loaderIsReady: false,
  setLoaderIsReady: () => false,
})

interface props {
  children: React.ReactNode
  title?: string
}

const Providers: React.FC<props> = ({ children }) => {
  const [fw, setFw] = useState<boolean>(false)
  const [d, setD] = useState<boolean>(false)
  const [t, setT] = useState<boolean>(false)
  const [m, setM] = useState<boolean>(false)
  const [loaderIsReady, setLoaderIsReady] = useState<boolean>(false)
  const [load, setLoad] = useState<string>("")
  const [initialLoad, setInitialLoad] = useState<boolean>(true)

  useEffect(() => {
    if (isBrowser()) {
      window.scrollTo(0, 0)

      const setScreenContext = () => {
        setM(window.innerWidth <= mobile)
        setT(window.innerWidth > mobile && window.innerWidth <= tablet)
        setD(window.innerWidth > tablet && window.innerWidth <= desktop)
        setFw(window.innerWidth > desktop)
      }

      setScreenContext()

      const removeListener = addDebouncedEventListener(
        window,
        "resize",
        setScreenContext,
        100
      )

      return removeListener
    }
  }, [])

  return (
    <ScreenContext.Provider
      value={{ fullWidth: fw, desktop: d, tablet: t, mobile: m }}
    >
      <LoaderContext.Provider
        value={{ load, setLoad, loaderIsReady, setLoaderIsReady }}
      >
        <PageLoader
          setInitialLoad={setInitialLoad}
          initialLoad={initialLoad}
          pageToLoad={load}
        />
        {loaderIsReady && children}
      </LoaderContext.Provider>
    </ScreenContext.Provider>
  )
}

export default Providers
