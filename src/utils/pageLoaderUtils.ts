import documentReady from "./documentReady"
import { sleep } from "./functions"

/**
 * we get a percentage by simply guessing how long the page will take to load based on
 * how long it's taken to load so far
 * the amount of time needed to load the page is pretty arbitrary, so you can adjust this function to fit
 */
const GET_TIME_NEEDED = (rawMs: number) => (rawMs / 3) * 2 + 1000

/**
 * extra number of milliseconds to wait after the document is ready
 * a higher number gives the percentage based loader more time to reach 100%
 * a value of 0 will short-circuit out of the percentage based loader as soon as the document is ready
 *
 * the animations will play either when the percentage reaches 100% or when
 * the document is ready plus this delay, whichever comes first
 */
const EXTRA_DELAY = 500

const progressCallbacks: Function[] = []
const animations: Function[] = []
let isComplete = false
const startTime = performance.now()
const timeNeeded = GET_TIME_NEEDED(startTime)

/**
 * percentage based loader
 *
 * calculates a new percentage based on the time elapsed since the page started loading
 * and calls all the progress callbacks with the new percentage every frame
 */
const updatePercent = () => {
  if (isComplete) return
  const currentTime = performance.now()
  const progress = ((currentTime - startTime) / timeNeeded) * 100
  if (progress >= 99) {
    documentReady().then(() => {
      if (!isComplete) {
        progressCallbacks.forEach(cb => cb(100))
        isComplete = true
        animations.forEach(cb => cb())
      }
    })
  } else {
    progressCallbacks.forEach(cb => cb(progress))
    if (!isComplete) requestAnimationFrame(updatePercent)
  }
}
updatePercent()

/**
 * document based loader
 *
 * waits EXTRA_DELAY milliseconds after the document is ready before calling
 * all the animations and all the progress callbacks with 100%
 */
documentReady().then(async () => {
  await sleep(EXTRA_DELAY)
  if (!isComplete) {
    isComplete = true
    progressCallbacks.forEach(cb => cb(100))
    animations.forEach(cb => cb())
  }
})

/**
 * register a callback (such as an animation) to be called when the page is loaded
 * @param completionFunction function to call when the page is loaded
 */
export const registerLoaderCallback = (completionFunction: Function) => {
  if (isComplete) completionFunction()
  else animations.push(completionFunction)
}

/**
 * register a callback (such as a progress bar or percentage) to be called while the page is loading
 * @param callback function to call with the percentage of the page loaded
 */
export const registerProgress = (callback: (progress: number) => void) => {
  if (isComplete) callback(100)
  else progressCallbacks.push(callback)
}

/**
 * remove a callback from the list of callbacks
 * @param callback function to remove from the list of callbacks
 */
export const unregisterLoaderCallback = (completionFunction: Function) => {
  const index = animations.indexOf(completionFunction)
  if (index > -1) animations.splice(index, 1)
}

/**
 * remove a progress callback from the list
 * @param callback function to remove from the list of callbacks
 */
export const unregisterProgress = (callback: (progress: number) => void) => {
  const index = progressCallbacks.indexOf(callback)
  if (index > -1) progressCallbacks.splice(index, 1)
}
