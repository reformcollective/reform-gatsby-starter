import React from "react"
import styled from "styled-components"
import SEO from "components/Seo"
import Header from "components/Header"
import Footer from "components/Footer"

interface props {
  children: React.ReactNode
  title?: string
}

const Layout: React.FC<props> = ({ children, title }) => {
  return (
    <div>
      <SEO title={title} />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

export default Layout

const Main = styled.main``
