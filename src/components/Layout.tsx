import React from "react"
import styled from "styled-components"
import SEO, { PageAttributes } from "components/Seo"
import Header from "components/Header"
import Footer from "components/Footer"
import Scroll from "components/Scroll"

interface props {
  pageAttributes: PageAttributes
  children: React.ReactNode | React.ReactNode[]
}

const Layout: React.FC<props> = ({ children, pageAttributes }) => {
  return (
    <Scroll>
      <SEO pageAttributes={pageAttributes} />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Scroll>
  )
}

export default Layout

const Main = styled.main``
