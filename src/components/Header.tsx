import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Header = () => (
  <Wrapper>
    <h1>Header Stuff</h1>
  </Wrapper>
)

const Wrapper = styled.header`
  background-color: rebeccapurple;
  color: white;
  display: grid;
  place-items: center;
`

export default Header
