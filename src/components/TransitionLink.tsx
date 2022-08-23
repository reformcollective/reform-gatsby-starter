import React from "react"

import { navigate } from "gatsby-link"

const allTransitions: Record<
  string,
  { inTimeline: gsap.core.Timeline[]; outTimeline: gsap.core.Timeline[] }
> = {}

export const registerTransition = (
  name: string,
  inTimeline: gsap.core.Timeline,
  outTimeline: gsap.core.Timeline
) => {
  const previous = allTransitions[name] || { inTimeline: [], outTimeline: [] }
  allTransitions[name] = {
    inTimeline: [...previous.inTimeline, inTimeline],
    outTimeline: [...previous.outTimeline, outTimeline],
  }
}

export const unregisterTransition = (
  name: string,
  inTimeline?: gsap.core.Timeline,
  outTimeline?: gsap.core.Timeline
) => {
  if (inTimeline && outTimeline) {
    const previous = allTransitions[name] || { inTimeline: [], outTimeline: [] }
    allTransitions[name] = {
      inTimeline: previous.inTimeline.filter(t => t !== inTimeline),
      outTimeline: previous.outTimeline.filter(t => t !== outTimeline),
    }
  } else {
    delete allTransitions[name]
  }
}

interface TransitionLinkProps {
  to: string
  transition?: string
  children: React.ReactNode
}

export function TransitionLink({
  to,
  transition = undefined,
  children,
}: TransitionLinkProps) {
  const handleClick: React.MouseEventHandler = e => {
    e.preventDefault()
    if (!transition) {
      navigate(to)
      return
    }

    const enterAnimations = transition
      ? allTransitions[transition]?.inTimeline ?? []
      : []
    const entranceDuration = enterAnimations.reduce((acc, t) => {
      return Math.max(acc, t.duration())
    }, 0)

    enterAnimations.forEach(t => t.play(0))

    setTimeout(async () => {
      await navigate(to)

      const exitAnimations = transition
        ? allTransitions[transition]?.outTimeline ?? []
        : []

      exitAnimations.forEach(t => t.play(0))
    }, entranceDuration * 1000)
  }

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  )
}
