import UniversalLink from "library/Loader/UniversalLink"
import styled from "styled-components"

export default function Footer() {
	return (
		<Wrapper id="hide-header">
			<Content>
				<h1>Footer</h1>
				<p>The header is hidden while the Footer is in view</p>
			</Content>
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

const Content = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: 10px;
`
