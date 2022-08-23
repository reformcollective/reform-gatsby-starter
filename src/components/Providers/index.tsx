import React from "react"

import { ScreenProvider } from "./Screen"

type ProvidersProps = {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return <ScreenProvider>{children}</ScreenProvider>
}
