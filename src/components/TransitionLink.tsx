import React from "react"

import { navigate } from "gatsby-link"

const allTransitions: Record<
  string,
  { inTimeline: gsap.core.Timeline[]; outTimeline: gsap.core.Timeline[] }
> = {}

/**
 * register a transition that can be run with a transitionLink or by using loadPage
 * @param name the name of the transition
 * @param inTimeline the timeline to run before navigating
 * @param outTimeline the timeline to run after navigating
 */
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

/**
 * unregister a previously registered transition, such as when a transition component unmounts
 *
 * if inTimeline and outTimeline are not provided, all registered transitions with the given name will be unregistered
 *
 * @param name the name of the transition to unmount
 * @param inTimeline if provided, only unregister this specific timeline
 * @param outTimeline if provided, only unregister this specific timeline
 */
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

/**
 * load a page, making use of the specified transition
 * @param to page to load
 * @param transition the transition to use
 */
export const loadPage = (to: string, transition?: string) => {
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

interface TransitionLinkProps {
  /**
   * the page to navigate to when clicked
   */
  to: string
  /**
   * the transition to use when navigating
   */
  transition?: string
  children: React.ReactNode
}

/**
 * a link that naviagates when clicked, using the specified transition
 * @returns
 */
export function TransitionLink({
  to,
  transition = undefined,
  children,
}: TransitionLinkProps) {
  const handleClick: React.MouseEventHandler = e => {
    e.preventDefault()
    loadPage(to, transition)
  }

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  )
}
