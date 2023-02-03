import { ScreenProvider } from "./Screen"

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return <ScreenProvider>{children}</ScreenProvider>
}
