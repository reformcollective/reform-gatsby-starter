import type React from "react"

type Props = Omit<React.SVGProps<SVGSVGElement>, "width" | "height"> & {
	bgStyle?: React.CSSProperties
	borderRadius?: number
	iconFillColor?: string
	round?: boolean
	size?: number | string
	title?: string
}

export type IconConfig = {
	color: string
	networkName: string
	/** SVG path */
	path: string
}

export default function createIcon(iconConfig: IconConfig) {
	const Icon: React.FC<Props> = ({
		bgStyle = {},
		borderRadius = 0,
		iconFillColor = "white",
		round = false,
		size = 64,
		title = iconConfig.networkName,
		...rest
	}) => (
		<svg viewBox="0 0 64 64" width={size} height={size} {...rest}>
			<title>{title}</title>
			{round ? (
				<circle
					cx="32"
					cy="32"
					r="32"
					fill={iconConfig.color}
					style={bgStyle}
				/>
			) : (
				<rect
					width="64"
					height="64"
					rx={borderRadius}
					ry={borderRadius}
					fill={iconConfig.color}
					style={bgStyle}
				/>
			)}

			<path
				d={iconConfig.path}
				fill={iconFillColor}
				transform="translate(15, 15) scale(0.7)"
			/>
		</svg>
	)

	return Icon
}
