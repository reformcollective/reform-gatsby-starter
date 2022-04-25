import * as React from "react"
import styled from "styled-components"

const Footer = () => (
  <Wrapper>
    <h1>Footer Stuff</h1>
  </Wrapper>
)

const Wrapper = styled.footer`
  background-color: rebeccapurple;
  color: white;
  display: grid;
  place-items: center;
`

export default Footer
