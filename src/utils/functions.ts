export const isBrowser = () => typeof window !== "undefined"

export const addDebouncedEventListener = (
  element: Window | HTMLElement,
  event: string,
  callback: Function,
  delay: number
) => {
  let timeout: NodeJS.Timeout
  const debouncedCallback = (...args: any[]) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => callback(...args), delay)
  }
  element.addEventListener(event, debouncedCallback)
}

export const vwToPx = (vw: number) => {
  if (isBrowser()) {
    const px = vw * (window.innerWidth / 100)
    return px
  } else {
    return 0
  }
}
