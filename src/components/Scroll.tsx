import React, { useEffect, useState } from "react"

import Observer from "gsap/Observer"
import ScrollSmoother from "gsap/ScrollSmoother"

type ScrollProps = {
  children: React.ReactNode
}

export default function Scroll({ children }: ScrollProps) {
  const [usingTouch, setUsingTouch] = useState(false)

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: usingTouch ? 0 : 1,
      smoothTouch: usingTouch ? 0 : 1,
      effects: true,
    })

    return () => {
      smoother.kill()
    }
  }, [usingTouch])

  useEffect(() => {
    const observer = Observer.create({
      onWheel: () => setUsingTouch(false),
      onDrag: () => setUsingTouch(true),
    })

    return () => {
      observer.kill()
    }
  })

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}
