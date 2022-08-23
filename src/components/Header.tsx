import React from "react"

import styled from "styled-components"

export default function Header() {
  return (
    <Wrapper>
      <h1>Header Stuff</h1>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background-color: rebeccapurple;
  color: white;
  display: grid;
  place-items: center;
`
