import React, { startTransition, useContext, useEffect, useRef } from "react"
import styled from "styled-components"
import gsap from "gsap"
import { navigate } from "gatsby"
import { LoaderContext } from "./Providers"

type props = {
  pageToLoad: string
  initialLoad: boolean
  setInitialLoad: Function
}

const PageLoader: React.FC<props> = ({
  pageToLoad,
  initialLoad,
  setInitialLoad,
}) => {
  const loader = useRef<HTMLDivElement>(null)
  const {
    setLoaderIsReady,
    loadPage,
    setPreviousRoute,
    setFinished,
    newPageHasLoaded,
    setNewPageHasLoaded,
  } = useContext(LoaderContext)

  useEffect(() => {
    setLoaderIsReady(true)
  }, [])

  useEffect(() => {
    if (loader.current) {
      const tl = gsap.timeline()
      if (initialLoad && newPageHasLoaded) {
        setFinished(false)
        setNewPageHasLoaded(false)

        /**
         * Transitions for the initial load sequence
         */
        startTransition(() => {
          tl.to(loader.current, {
            duration: 1,
            opacity: 0,
            onComplete: () => {
              setInitialLoad(false)
              setFinished(true)
            },
          })
        })
      } else if (pageToLoad && !isCurrentPage(pageToLoad)) {
        setFinished(false)

        /**
         * Transitions for leaving a page
         */
        startTransition(() => {
          tl.to(loader.current, {
            duration: 0.5,
            opacity: 1,
            onComplete: () => {
              navigate(pageToLoad)
              setPreviousRoute(pageToLoad)
              loadPage("")
            },
          })
        })
      } else if (newPageHasLoaded) {
        setNewPageHasLoaded(false)

        /**
         * Transitions for entering a page
         */
        startTransition(() => {
          tl.to(loader.current, {
            duration: 0.5,
            opacity: 0,
            onComplete: () => {
              setFinished(true)
            },
          }, 0.2)
        })
      }
    }
  }, [pageToLoad, initialLoad, newPageHasLoaded])

  return (
    <Wrapper ref={loader}>
      {initialLoad ? <Loader>INTIAL</Loader> : <Loader>TRANSITION</Loader>}
    </Wrapper>
  )
}

export default PageLoader

const Wrapper = styled.div`
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100%;
  height: 100%;
`
const Loader = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  display: grid;
  place-items: center;
`

const isCurrentPage = (page: string) => {
  const currentPage = window.location.pathname
  return currentPage === page
}
