import UniversalLink from "library/Loader/UniversalLink"
import { isBrowser } from "library/deviceDetection"

type PlatformType = "linkedin" | "x" | "facebook"

const getCurrentURL = () => {
	if (isBrowser) {
		return window.location.href
	}
	return ""
}

export default function SocialShare({
	platform,
	button,
}: { platform: PlatformType; button?: React.ReactNode }) {
	if (platform === "linkedin") {
		return (
			<UniversalLink
				to={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
					getCurrentURL(),
				)}`}
			>
				LinkedIn
			</UniversalLink>
		)
	}
	if (platform === "x") {
		return (
			<UniversalLink
				to={`https://x.com/intent/post?url=${encodeURIComponent(
					getCurrentURL(),
				)}`}
			>
				X
			</UniversalLink>
		)
	}
	if (platform === "facebook") {
		return (
			<UniversalLink
				to={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
					getCurrentURL(),
				)}`}
			>
				Facebook
			</UniversalLink>
		)
	}
}
