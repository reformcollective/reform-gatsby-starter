import gsap from "gsap"
import { useRegisterTransition } from "library/Loader/TransitionUtils"
import { useRef } from "react"
import styled from "styled-components"
import textStyles from "styles/text"

export default function Transition() {
	const wrapperRef = useRef<HTMLDivElement>(null)

	const slideIn = () => {
		gsap.fromTo(
			wrapperRef.current,
			{
				opacity: 1,
				xPercent: -100,
			},
			{
				duration: 1,
				xPercent: 0,
				ease: "power1.in",
			},
		)
	}

	const slideOut = () => {
		gsap.fromTo(
			wrapperRef.current,
			{
				xPercent: 0,
				opacity: 1,
			},
			{
				duration: 1,
				xPercent: 100,
				ease: "power1.out",
			},
		)
	}

	const fadeIn = () => {
		gsap.fromTo(
			wrapperRef.current,
			{
				opacity: 0,
			},
			{
				duration: 1,
				opacity: 1,
				ease: "power1.in",
			},
		)
	}

	const fadeOut = () => {
		gsap.fromTo(
			wrapperRef.current,
			{
				opacity: 1,
			},
			{
				duration: 1,
				opacity: 0,
				ease: "power1.out",
			},
		)
	}

	// register two page transitions
	useRegisterTransition("fade", {
		in: fadeIn,
		out: fadeOut,
		inDuration: 1,
		outDuration: 1,
	})
	useRegisterTransition("slide", {
		in: slideIn,
		out: slideOut,
		inDuration: 1,
		outDuration: 1,
	})

	return (
		<Wrapper ref={wrapperRef}>
			<h1>PAGE TRANSITION</h1>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: green;
  z-index: 100;
  opacity: 0;
  pointer-events: none;
  display: grid;
  place-items: center;
  ${textStyles.h1}
`
