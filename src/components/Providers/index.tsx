import { ScreenProvider } from "library/ScreenContext"
import StyledManager from "library/StyledManager"

interface ProvidersProps {
	children: React.ReactNode
}

/**
 * providers here will be mounted once, and will never unmount
 */
export function RootProviders({ children }: ProvidersProps) {
	return <ScreenProvider>{children}</ScreenProvider>
}

/**
 * providers here will be unmounted and remounted on every route change
 */
export function RouteProviders({ children }: ProvidersProps) {
	return <StyledManager>{children}</StyledManager>
}
