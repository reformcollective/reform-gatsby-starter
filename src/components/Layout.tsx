import BlueTransition from "components/BlueTransition"
import Footer from "components/Footer"
import GreenTransition from "components/GreenTransition"
import Header from "components/Header"
import { useBackButton } from "library/Loader/TransitionUtils"
import { useTrackPageReady } from "library/pageReady"
import Scroll from "library/Scroll"
import useCSSHeightVariables from "library/useCssHeightVariables"
import styled, { createGlobalStyle, css } from "styled-components"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  useTrackPageReady()
  useBackButton()
  useCSSHeightVariables()

  return (
    <>
      <GreenTransition />
      <BlueTransition />
      <GlobalStyle />
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

// TODO: configure a default text color
const globalCss = css`
  /* default text styles */
  html {
    font-family: sans-serif;
  }

  * {
    /* need this so that fonts match figma */
    text-rendering: geometricprecision;
  }

  /* fixes for visbug */
  vis-bug {
    position: fixed;
    z-index: var(--layer-1);
  }

  visbug-metatip,
  visbug-handles,
  visbug-ally {
    position: absolute;
    z-index: var(--layer-top);
  }

  /** restore default focus states for elements that need them */
  *:focus-visible {
    outline: 2px solid #00f8;
  }
`

const GlobalStyle = createGlobalStyle`${globalCss}`
