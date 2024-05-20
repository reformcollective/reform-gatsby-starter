import Footer from "components/Footer"
import Header from "components/Header"
import Preloader from "components/Preloader"
import Transition from "components/Transition"
import { useBackButton } from "library/Loader/TransitionUtils"
import Scroll from "library/Scroll"
import { useTrackPageReady } from "library/pageReady"
import useTrackFrameTime from "library/useTrackFrameTime"
import styled, { createGlobalStyle, css } from "styled-components"
import { ColorStyle } from "styles/colors"
import textStyles from "styles/text"

interface LayoutProps {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	useTrackPageReady()
	useBackButton()
	useTrackFrameTime()

	return (
		<>
			<Transition />
			<Preloader />
			<GlobalStyle />
			<ColorStyle />
			<Scroll>
				<Header />
				<Main>{children}</Main>
				<Footer />
			</Scroll>
		</>
	)
}

const Main = styled.main`
  overflow-x: clip;
`

// TODO: configure a default text color
const globalCss = css`
  /* default text styles */
  html {
    /* if your project uses a dark color for most text, set that here */
    color: black;
    font-family: sans-serif;
    ${textStyles.body}
  }

  * {
    /* need this so that fonts match figma */
    text-rendering: geometricprecision;
    -webkit-font-smoothing: antialiased;
  }

  /** restore default focus states for elements that need them */
  *:focus-visible {
    outline: 2px solid #00f8;
  }
`

const GlobalStyle = createGlobalStyle`${globalCss}`
