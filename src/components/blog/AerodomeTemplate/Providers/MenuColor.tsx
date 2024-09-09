import type React from "react"
import {
	createContext,
	startTransition,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react"

const NavContext = createContext<{
	menuDark: boolean
	setMenuDark: React.Dispatch<React.SetStateAction<boolean>>
	paused: boolean
	setPaused: React.Dispatch<React.SetStateAction<boolean>>
}>({
	menuDark: false,
	setMenuDark: () => false,
	paused: false,
	setPaused: () => false,
})

/**
 * access the current header color & theme
 * @param options
 * @param options.menuDark whether the menu should be dark text or light text
 * @returns the current header color & theme
 */
export const useNavConfig = (options?: {
	menuDark?: boolean
	paused?: boolean
}) => {
	const { menuDark, setMenuDark, paused, setPaused } = useContext(NavContext)

	const newMenuDark = options?.menuDark
	const newPaused = options?.paused

	useEffect(() => {
		if (typeof newMenuDark === "boolean")
			startTransition(() => setMenuDark(newMenuDark))
		if (typeof newPaused === "boolean")
			startTransition(() => setPaused(newPaused))
	}, [newMenuDark, setMenuDark, newPaused, setPaused])

	return { menuDark, paused }
}

type Props = {
	children: React.ReactNode
}

export default function NavProvider({ children }: Props) {
	const [menuDark, setMenuDark] = useState<boolean>(false)
	const [paused, setPaused] = useState<boolean>(false)

	const values = useMemo(
		() => ({
			menuDark,
			setMenuDark,
			paused,
			setPaused,
		}),
		[menuDark, paused],
	)

	return <NavContext.Provider value={values}>{children}</NavContext.Provider>
}
