import gsap from "gsap"
import loader from "library/Loader"
import { useRegisterLoaderCallback } from "library/Loader/LoaderUtils"
import { useRef, useState } from "react"
import styled from "styled-components"
import textStyles from "styles/text"

export default function Preloader() {
	const wrapperRef = useRef<HTMLDivElement>(null)
	const [progress, setProgress] = useState(0)

	loader.useEventListener("progressUpdated", (newProgress: number) => {
		setProgress(newProgress)
	})

	const slideOut = () => {
		gsap.to(wrapperRef.current, {
			y: "-100vh",
			duration: 1,
		})
	}

	useRegisterLoaderCallback({
		duration: 1,
		callback: slideOut,
	})

	return (
		<Wrapper ref={wrapperRef}>
			<h1>BLUE TRANSITION</h1>
			<h1>{Math.round(progress)}</h1>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: dodgerblue;
  z-index: 100;
  pointer-events: none;
  display: grid;
  place-items: center;
  ${textStyles.h1}
`
