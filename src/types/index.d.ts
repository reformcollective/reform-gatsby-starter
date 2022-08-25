declare global {
  interface Window {
    /**
     * special object that can be used to detect if running in safari
     */
    safari: unknown
    /**
     * special object that can be used to detect if running in chrome
     */
    chrome: unknown
    /**
     * special object that can be used to detect if running in firefox
     */
    netscape: unknown
  }
}

export interface ScreenContextTypes {
  fullWidth: boolean
  desktop: boolean
  tablet: boolean
  mobile: boolean
}
