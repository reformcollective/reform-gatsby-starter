import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import SEO, { PageAttributes } from "components/Seo"
import Header from "components/Header"
import Footer from "components/Footer"
import Scroll from "components/Scroll"
import { documentReady } from "utils/functions"
import { LoaderContext } from "./Providers"

interface props {
  pageAttributes: PageAttributes
  children: React.ReactNode | React.ReactNode[]
}

const Layout: React.FC<props> = ({ children, pageAttributes }) => {
  const { setNewPageHasLoaded } = useContext(LoaderContext)

  useEffect(() => {
    // on dom ready
    documentReady(() => {
      setNewPageHasLoaded(true)
    })
  }, [])

  return (
    <>
      <Header />
      <Scroll>
        <SEO pageAttributes={pageAttributes} />
        <Main>
          {children}
          <Footer />
        </Main>
      </Scroll>
    </>
  )
}

export default Layout

const Main = styled.main``
