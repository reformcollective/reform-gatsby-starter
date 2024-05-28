import UniversalLink from "library/Loader/UniversalLink"
import styled from "styled-components"

export default function Footer() {
	return (
		<Wrapper>
			<h1>Footer</h1>
			<UniversalLink to="/">Home</UniversalLink>
		</Wrapper>
	)
}

const Wrapper = styled.footer`
	background-color: rebeccapurple;
	color: white;
	display: grid;
	place-items: center;
	height: 300px;
`
