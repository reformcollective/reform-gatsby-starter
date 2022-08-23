import React, { useEffect, useRef } from "react"

import gsap from "gsap"
import styled from "styled-components"

import textStyles from "styles/text"

import { registerTransition, unregisterTransition } from "./TransitionLink"

export default function FadeTransition() {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animateIn = gsap.timeline({ paused: true })
    animateIn.fromTo(wrapperRef.current, {
        opacity: 0,
      },
      {
        opacity: 1,
      })

    const animateOut = gsap.timeline({ paused: true })
    animateOut.to(wrapperRef.current, {
      opacity: 0,
    })

    registerTransition("fade", animateIn, animateOut)

    return () => {
      unregisterTransition("fade", animateIn, animateOut)
    }
  }, [])

  return (
    <Wrapper ref={wrapperRef}>
      <h1>PAGE TRANSITION</h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: green;
  z-index: 100;
  pointer-events: none;
  display: grid;
  place-items: center;
  ${textStyles.h1}
`
