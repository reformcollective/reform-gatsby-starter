import React, { useEffect, useRef, useState } from "react"

import gsap from "gsap"
import styled from "styled-components"

import textStyles from "styles/text"
import {
  registerLoaderCallback,
  registerProgress,
  unregisterLoaderCallback,
  unregisterProgress,
} from "utils/LoaderUtils"

import {
  registerTransition,
  unregisterTransition,
} from "../utils/TransitionUtils"

export default function BlueTransition() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [showPercentage, setShowPercentage] = useState(true)

  const slideIn = () => {
    gsap.fromTo(wrapperRef.current, { xPercent: -100 },
      { xPercent: 0, duration: 1 })
    return 1
  }

  const slideOut = () => {
    gsap.fromTo(wrapperRef.current, {
        xPercent: 0,
        opacity: 1,
      },
      {
        duration: 1,
        xPercent: 100,
        ease: "power1.out",
        onComplete: () => setShowPercentage(false),
      })
    return 1
  }

  useEffect(() => {
    // register a page transition
    registerTransition("blue", slideIn, slideOut)

    // register a loader
    registerLoaderCallback(slideOut)
    registerProgress(setProgress)

    return () => {
      // clean up page transition
      unregisterTransition("blue", slideIn, slideOut)

      // clean up loader
      unregisterLoaderCallback(slideOut)
      unregisterProgress(setProgress)
    }
  }, [])

  return (
    <Wrapper ref={wrapperRef}>
      <h1>BLUE TRANSITION</h1>
      {showPercentage && <h1>{Math.round(progress)}</h1>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: dodgerblue;
  z-index: 100;
  pointer-events: none;
  display: grid;
  place-items: center;
  ${textStyles.h1}
`
