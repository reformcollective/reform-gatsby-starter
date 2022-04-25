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

//shuffle an array generically
export const shuffle = <T>(array: T[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
