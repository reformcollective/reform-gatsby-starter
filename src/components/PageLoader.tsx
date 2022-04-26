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
  const { setLoaderIsReady, setLoad } = useContext(LoaderContext)

  useEffect(() => {
    setLoaderIsReady(true)
  }, [])

  useEffect(() => {
    if (loader.current) {
      const tl = gsap.timeline()
      if (initialLoad) {
        /**
         * Transitions for the initial load sequence
         */
        startTransition(() => {
          tl.to(loader.current, {
            duration: 1,
            opacity: 0,
            onComplete: () => {
              setInitialLoad(false)
            },
          })
        })
      } else if (pageToLoad && !isCurrentPage(pageToLoad)) {
        /**
         * Transitions for leaving a page
         */
        startTransition(() => {
          tl.to(loader.current, {
            duration: 0.5,
            opacity: 1,
            onComplete: () => {
              navigate(pageToLoad)
              setLoad("")
            },
          })
        })
      } else {
        /**
         * Transitions for entering a page
         */
        startTransition(() => {
          tl.to(loader.current, {
            duration: 0.5,
            opacity: 0,
          }, 0.2)
        })
      }
    }
  }, [pageToLoad, initialLoad])

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
