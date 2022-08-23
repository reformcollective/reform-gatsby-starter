import React, { useEffect, useRef } from "react"

import gsap from "gsap"
import styled from "styled-components"

import textStyles from "styles/text"

import { registerTransition, unregisterTransition } from "./TransitionLink"

export default function GreenTransition() {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const slideIn = () => {
    gsap.fromTo(wrapperRef.current, {
        opacity: 1,
        xPercent: -100,
      },
      {
        duration: 1,
        xPercent: 0,
        ease: "power1.in",
      })

    return 1
  }
  const slideOut = () => {
    gsap.to(wrapperRef.current, {
      duration: 1,
      xPercent: 100,
      ease: "power1.out",
    })

    return 1
  }
  const fadeIn = () => {
    gsap.fromTo(wrapperRef.current, {
        opacity: 0,
      },
      {
        duration: 1,
        opacity: 1,
        ease: "power1.in",
      })

    return 1
  }
  const fadeOut = () => {
    gsap.to(wrapperRef.current, {
      duration: 1,
      opacity: 0,
      ease: "power1.out",
    })

    return 1
  }

  useEffect(() => {
    registerTransition("fade", fadeIn, fadeOut)
    registerTransition("slide", slideIn, slideOut)

    return () => {
      unregisterTransition("fade", fadeIn, fadeOut)
      unregisterTransition("slide", slideIn, slideOut)
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
  opacity: 0;
  pointer-events: none;
  display: grid;
  place-items: center;
  ${textStyles.h1}
`
