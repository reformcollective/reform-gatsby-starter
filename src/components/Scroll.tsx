import React, { useEffect } from "react"

import ScrollSmoother from "gsap/ScrollSmoother"

type ScrollProps = {
  children: React.ReactNode
}

export default function Scroll({ children }: ScrollProps) {
  useEffect(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    })
  }, [])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}
