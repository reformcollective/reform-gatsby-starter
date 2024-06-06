import UniversalLink from "library/Loader/UniversalLink"
import styled from "styled-components"

export default function LoaderB() {
	return (
		<Wrapper>
			<h1>Loader Tests B</h1>
			<UniversalLink to="/visual-tests/loader/a">Go to Loader A</UniversalLink>
			<UniversalLink
				transition="instant"
				to="/visual-tests/loader/a#content-21"
			>
				instant to content 21
			</UniversalLink>
			<UniversalLink transition="fade" to="/visual-tests/loader/a#content-21">
				fade to content 21
			</UniversalLink>
			<UniversalLink
				transition="fade"
				to="/visual-tests/loader/a?query=true#content-21"
			>
				with query parameter
			</UniversalLink>
			<p>content 1</p>
			<p>content 2</p>
			<p>content 3</p>
			<p>content 4</p>
			<p>content 5</p>
			<p>content 6</p>
			<p>content 7</p>
			<p>content 8</p>
			<p>content 9</p>
			<p>content 10</p>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
	padding: 100px;
	background: #eff;

	p {
		opacity: 0.5;
	}
`
