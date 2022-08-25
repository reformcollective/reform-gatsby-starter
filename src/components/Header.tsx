import React, { useEffect, useRef } from "react"

import gsap from "gsap"
import styled from "styled-components"

import { registerTransition, unregisterTransition } from "utils/TransitionUtils"

export default function Header() {
  const text = useRef<HTMLDivElement>(null)

  const up = () => {
    gsap.to(text.current, {
      yPercent: -100,
      duration: 1,
    })
    return 1
  }

  const down = () => {
    gsap.from(text.current, {
      yPercent: -100,
      duration: 1,
    })
    return 1
  }

  useEffect(() => {
    registerTransition("fade", up, down)

    return () => unregisterTransition("fade", up, down)
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
