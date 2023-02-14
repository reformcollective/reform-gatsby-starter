import styled from 'styled-components'
import SEO from "components/Seo"
import Scene from 'library/threeJS/SceneStarter'

export default function Three() {
  return (
    <Wrapper>
      <Scene/>
    </Wrapper>
  )
}

export function Head() {
  return <SEO title="THREE" description="ThreeJS scene starter" pathname="/three" />
}

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: black;
`