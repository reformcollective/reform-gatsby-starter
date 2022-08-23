import React from "react"

import styled from "styled-components"

import Footer from "components/Footer"
import Header from "components/Header"
import Scroll from "components/Scroll"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Scroll>
      <Header />
      <Main>
        {children}
        <Footer />
      </Main>
    </Scroll>
  )
}

const Main = styled.main``
