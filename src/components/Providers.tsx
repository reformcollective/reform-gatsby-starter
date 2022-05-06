import React, { createContext, useState, useEffect } from "react"
import styled from "styled-components"
import { desktop, tablet, mobile } from "styles/media"
import { addDebouncedEventListener, isBrowser } from "utils/functions"
import PageLoader from "./PageLoader"

/**
 * Gives access to media queries
 */
export const ScreenContext = createContext({
  fullWidth: false,
  desktop: false,
  tablet: false,
  mobile: false,
})

/**
 * Loads pages and manages the page loader
 */
export const LoaderContext = createContext<{
  /**
   * contains the route that is currently loading
   */
  pageLoading: string
  /**
   * loads a route (using the page transition)
   */
  loadPage: Function
  /**
   * tracks if the page loader has rendered
   */
  loaderIsReady: boolean
  /**
   * sets the page loader to ready.
   * only for use by the page loader.
   */
  setLoaderIsReady: Function
  /**
   * contains route of the previous page that was loaded
   */
  previousRoute: string
  /**
   * sets the route of the previous page that was loaded
   */
  setPreviousRoute: Function
  /**
   *  tracks if a new page has loaded so that the page loader knows it needs to transition
   */
  newPageHasLoaded: boolean
  /**
   * indicates that a new page has loaded
   */
  setNewPageHasLoaded: Function
  /**
   * tracks if the page loader is done transitioning
   */
  finished: boolean
  /**
   * sets the page loader to finished.
   * only for use by the page loader.
   */
  setFinished: Function
}>({
  pageLoading: "",
  loadPage: () => false,
  loaderIsReady: false,
  setLoaderIsReady: () => false,
  previousRoute: "",
  setPreviousRoute: () => false,
  newPageHasLoaded: false,
  setNewPageHasLoaded: () => false,
  finished: false,
  setFinished: () => false,
})

interface props {
  children: React.ReactNode
}

const Providers: React.FC<props> = ({ children }) => {
  //stuff for screencontext
  const [fw, setFw] = useState<boolean>(false)
  const [d, setD] = useState<boolean>(false)
  const [t, setT] = useState<boolean>(false)
  const [m, setM] = useState<boolean>(false)

  //logic for screen context
  useEffect(() => {
    if (isBrowser()) {
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

  //stuff for loadercontext
  const [loaderIsReady, setLoaderIsReady] = useState<boolean>(false)
  const [pageLoading, loadPage] = useState<string>("")
  const [initialLoad, setInitialLoad] = useState<boolean>(true)
  const [previousRoute, setPreviousRoute] = useState<string>("")
  const [newPageHasLoaded, setNewPageHasLoaded] = useState<boolean>(false)
  const [finished, setFinished] = useState<boolean>(false)
  const loaderValues = {
    pageLoading,
    loadPage,
    loaderIsReady,
    setLoaderIsReady,
    previousRoute,
    setPreviousRoute,
    newPageHasLoaded,
    setNewPageHasLoaded,
    finished,
    setFinished,
  }

  return (
    <ScreenContext.Provider
      value={{ fullWidth: fw, desktop: d, tablet: t, mobile: m }}
    >
      <LoaderContext.Provider value={loaderValues}>
        <PageLoader
          setInitialLoad={setInitialLoad}
          initialLoad={initialLoad}
          pageToLoad={pageLoading}
        />
        <Container readyToShow={loaderIsReady}>{children}</Container>
      </LoaderContext.Provider>
    </ScreenContext.Provider>
  )
}

const Container = styled.div<{ readyToShow: boolean }>`
  opacity: 0;
  opacity: ${props => props.readyToShow && 1};
`

export default Providers
