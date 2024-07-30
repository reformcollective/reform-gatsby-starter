import gsap from "gsap"
import { usePageTransition } from "library/Loader/TransitionUtils"
import { fresponsive } from "library/fullyResponsive"
import useAutoHideHeader from "library/useAutoHideHeader"
import { useRef } from "react"
import styled, { css } from "styled-components"

export default function Header() {
	const text = useRef<HTMLDivElement>(null)
	const wrapperRef = useRef<HTMLDivElement>(null)

	/**
	 * if needed, the autoHideHeader hook also takes two separate arrays of element ID strings as parameters
	 * to hide and stick the header when specified elements are in view
	 */
	const translateY = useAutoHideHeader(wrapperRef)

	/**
	 * this is an example of how to include arbitrary elements in a page transition
	 * the element in question is the header in this case
	 *
	 * don't use this pattern for things that occur *after* the page transition, like animating in content
	 */

	const up = () => {
		gsap.to(text.current, {
			yPercent: -100,
			duration: 1,
		})
	}

	const down = () => {
		gsap.to(text.current, {
			yPercent: 0,
			duration: 1,
		})
	}

	usePageTransition("fade", {
		in: up,
		out: down,
		inDuration: 1,
		outDuration: 1,
	})

	return (
		<Wrapper ref={wrapperRef} $yPos={translateY}>
			<h1 ref={text}>Header</h1>
		</Wrapper>
	)
}

const Wrapper = styled.header<{ $yPos: number }>`
	translate: 0 ${({ $yPos }) => $yPos}px;
	transition: translate 0.2s ease-out;
	transform: translate3d(0);
	place-items: center;
	position: fixed;
	display: grid;
	width: 100%;
	z-index: 5;
	background-color: rebeccapurple;
	color: white;

	${fresponsive(css`
		height: 100px;
		top: 0;
	`)}
`
