export const isBrowser = () => typeof window !== "undefined"

export const addDebouncedEventListener = (
  element: Window | HTMLElement,
  event: string,
  callback: () => void,
  delay: number
) => {
  let timeout: NodeJS.Timeout

  const debouncedCallback = () => {
    clearTimeout(timeout)
    timeout = setTimeout(() => callback(), delay)
  }
  element.addEventListener(event, debouncedCallback)
}

export const vwToPx = (vw: number) => {
  if (isBrowser()) {
    const px = vw * (window.innerWidth / 100)
    return px
  }
  return 0
}

export const vhToPx = (vh: number) => {
  if (isBrowser()) {
    const px = vh * (window.innerHeight / 100)
    return px
  }
  return 0
}

export const sleep = (ms: number) =>
  new Promise(resolve => {
    setTimeout(resolve, ms)
  })

export function pathnameMatches(pathA: string, pathB: string) {
  return (
    pathA === pathB ||
    pathA === `${pathB}/` ||
    pathA === `/${pathB}` ||
    pathA === `/${pathB}/`
  )
}
