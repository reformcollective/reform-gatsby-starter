/* eslint-disable no-await-in-loop */
import React, { useEffect } from "react"

import { navigate } from "gatsby-link"
import gsap from "gsap"

import { sleep } from "utils/functions"

/**
 * A function that runs an animation and returns the duration of that animation in seconds
 */
type Animation = () => number

/**
 * Object tracking all the registered transitions
 */
const allTransitions: Record<
  string,
  {
    inAnimation: Animation[]
    outAnimation: Animation[]
  }
> = {}

/**
 * register a transition that can be run with a transitionLink or by using loadPage
 * @param name the name of the transition
 * @param inAnimation the animation to run before navigating
 * @param outAnimation the animation to run after navigating
 */
export const registerTransition = (
  name: string,
  inAnimation: Animation,
  outAnimation: Animation
) => {
  const previous = allTransitions[name] || { inAnimation: [], outAnimation: [] }
  allTransitions[name] = {
    inAnimation: [...previous.inAnimation, inAnimation],
    outAnimation: [...previous.outAnimation, outAnimation],
  }
}

/**
 * unregister a previously registered transition, such as when a transition component unmounts
 *
 * if inAnimation and outAnimation are not provided, all registered transitions with the given name will be unregistered
 *
 * @param name the name of the transition to unmount
 * @param inAnimation if provided, only unregister this specific animation
 * @param outAnimation if provided, only unregister this specific animation
 */
export const unregisterTransition = (
  name: string,
  inAnimation?: Animation,
  outAnimation?: Animation
) => {
  if (inAnimation && outAnimation) {
    const previous = allTransitions[name] || {
      inAnimation: [],
      outAnimation: [],
    }
    allTransitions[name] = {
      inAnimation: previous.inAnimation.filter(t => t !== inAnimation),
      outAnimation: previous.outAnimation.filter(t => t !== outAnimation),
    }
  } else {
    delete allTransitions[name]
  }
}

let animationInProgress = false
let waitingForPageToLoad = false
/**
 * load a page, making use of the specified transition
 * @param to page to load
 * @param transition the transition to use
 */
export const loadPage = async (to: string, transition?: string) => {
  while (animationInProgress) await sleep(10)
  animationInProgress = true
  if (!transition) {
    navigate(to)
    return
  }

  const animationContext = gsap.context(() => {})
  const enterAnimations = transition
    ? allTransitions[transition]?.inAnimation ?? []
    : []

  // run each animation, add it to the context, and get the duration of the longest one
  const entranceDuration = enterAnimations.reduce((acc, t) => {
    let duration = 0
    animationContext.add(() => {
      duration = t()
    })
    return Math.max(acc, duration)
  }, 0)

  setTimeout(async () => {
    // if we're on the page we want to go to, we don't wait for new page load
    if (
      window.location.pathname !== to &&
      window.location.pathname !== `${to}/` &&
      window.location.pathname !== `/${to}` &&
      window.location.pathname !== `/${to}/`
    )
      waitingForPageToLoad = true

    // actually navigate to the page
    await navigate(to)
    while (waitingForPageToLoad) await sleep(10)

    const exitAnimations = transition
      ? allTransitions[transition]?.outAnimation ?? []
      : []

    // run each animation, add it to the context, and get the duration of the longest one
    const exitDuration = exitAnimations.reduce((acc, t) => {
      let duration = 0
      animationContext.add(() => {
        duration = t()
      })
      return Math.max(acc, duration)
    }, 0)

    setTimeout(() => {
      animationContext.revert()
      animationInProgress = false
    }, exitDuration * 1000 + 10)
  }, entranceDuration * 1000)
}

/**
 * tracks when a page is done loading, for use in layout
 */
export function usePageLoad() {
  useEffect(() => {
    waitingForPageToLoad = false
  }, [])
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
