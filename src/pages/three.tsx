import Seo from "components/Seo"
import UniversalLink from "library/Loader/UniversalLink"
import Scene from "library/threeJS/SceneStarter"
import styled from "styled-components"

export default function Three() {
	return (
		<Wrapper>
			<Link to="/">Return Home</Link>
			<Scene />
		</Wrapper>
	)
}

export function Head() {
	return (
		<Seo title="THREE" description="ThreeJS scene starter" pathname="/three" />
	)
}

const Wrapper = styled.section`
	width: 100vw;
	height: 100vh;
	background-color: black;
`

const Link = styled(UniversalLink)`
	position: absolute;
	z-index: 2;
	color: white;
	cursor: pointer;
`
