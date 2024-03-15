import gsap from "gsap"
import {
	registerTransition,
	unregisterTransition,
} from "library/Loader/TransitionUtils"
import { useEffect, useRef } from "react"
import styled from "styled-components"

export default function Header() {
	const text = useRef<HTMLDivElement>(null)

	/**
	 * this is an example of how to include arbitrary elements in a page transition
	 * the element in question is the header in this case
	 *
	 * don't use this pattern for things that occur after the page transition, like animating in content
	 */
	useEffect(() => {
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

		registerTransition("fade", {
			in: up,
			out: down,
			inDuration: 1,
			outDuration: 1,
		})

		return () => unregisterTransition("fade", [up, down])
	}, [])

	return (
		<Wrapper>
			<h1 ref={text}>Header</h1>
		</Wrapper>
	)
}

const Wrapper = styled.header`
  background-color: rebeccapurple;
  color: white;
  display: grid;
  place-items: center;
  height: 100px;
`
