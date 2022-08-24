import React, { useEffect, useRef } from "react"

import gsap from "gsap"
import styled from "styled-components"

import { registerTransition } from "utils/TransitionUtils"

export default function Header() {
  const text = useRef<HTMLDivElement>(null)

  const spin = () => {
    gsap.to(text.current, {
      rotation: "+=360",
      duration: 1,
    })
    return 1
  }

  useEffect(() => {
    registerTransition("fade", spin, spin)
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
