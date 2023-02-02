import { useEffect, useRef, useState } from "react"

import gsap from "gsap"
import styled from "styled-components"

import loader from "library/Loader"
import {
  registerTransition,
  unregisterTransition,
} from "library/Loader/TransitionUtils"
import textStyles from "styles/text"

export default function BlueTransition() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [showPercentage, setShowPercentage] = useState(true)

  const slideIn = () => {
    gsap.fromTo(wrapperRef.current, { xPercent: -100 },
      { xPercent: 0, duration: 1 })
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
  }

  const updateProgress = (e: CustomEvent<number>) => {
    setProgress(e.detail)
  }

  useEffect(() => {
    // register a page transition
    registerTransition("blue", {
      in: slideIn,
      out: slideOut,
      inDuration: 1,
      outDuration: 1,
    })

    // register a loader
    loader.addEventListener("initialEnd", slideOut)
    loader.addEventListener("progressUpdated", updateProgress)

    return () => {
      // clean up page transition
      unregisterTransition("blue", [slideIn, slideOut])

      // clean up loader
      loader.removeEventListener("initialEnd", slideOut)
      loader.removeEventListener("progressUpdated", updateProgress)
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
