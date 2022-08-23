export default function documentReady(callback?: VoidFunction) {
  return new Promise(resolve => {
    // check if DOM is already available
    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      // call on next available tick
      setTimeout(resolve, 1)
      if (callback) setTimeout(callback, 1)
    } else {
      document.addEventListener("DOMContentLoaded", resolve)
      if (callback) document.addEventListener("DOMContentLoaded", callback)
    }
  })
}
