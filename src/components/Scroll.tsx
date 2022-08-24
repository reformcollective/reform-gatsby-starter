import React, { useEffect, useState } from "react"

import Observer from "gsap/Observer"
import ScrollSmoother from "gsap/ScrollSmoother"

type ScrollProps = {
  children: React.ReactNode
}

export const useIsSmooth = () => {
  const [smooth, setSmooth] = useState(false)

  useEffect(() => {
    const observer = Observer.create({
      onWheel: () => setSmooth(true),
      onDrag: () => setSmooth(false),
    })

    return () => {
      observer.kill()
    }
  }, [])

  return smooth
}

export default function Scroll({ children }: ScrollProps) {
  const isSmooth = useIsSmooth()

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: isSmooth ? 1 : 0,
      smoothTouch: isSmooth ? 1 : 0,
      effects: true,
    })

    return () => {
      smoother.kill()
    }
  }, [isSmooth])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}
