import React from "react"

import styled from "styled-components"

import BlueTransition from "components/BlueTransition"
import Footer from "components/Footer"
import GreenTransition from "components/GreenTransition"
import Header from "components/Header"
import Scroll from "components/Scroll"
import { usePageLoad } from "utils/Loader/TransitionUtils"
import { useDocumentReady } from "utils/pageReady"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  usePageLoad()
  useDocumentReady()

  return (
    <>
      <GreenTransition />
      <BlueTransition />
      <Scroll>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Scroll>
    </>
  )
}

const Main = styled.main`
  overflow-x: hidden;
`
