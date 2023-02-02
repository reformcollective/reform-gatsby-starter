import styled from "styled-components"

import BlueTransition from "components/BlueTransition"
import Footer from "components/Footer"
import GreenTransition from "components/GreenTransition"
import Header from "components/Header"
import Scroll from "components/Scroll"
import { useBackButton } from "library/Loader/TransitionUtils"
import { useTrackPageReady } from "library/pageReady"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  useTrackPageReady()
  useBackButton()

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
