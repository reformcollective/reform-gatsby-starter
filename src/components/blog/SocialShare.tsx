import UniversalLink from "library/Loader/UniversalLink"
import { isBrowser } from "library/deviceDetection"

type PlatformType = "linkedin" | "x" | "facebook" | "youtube" | "pinterest"

const getCurrentURL = () => {
	if (isBrowser) {
		return window.location.href
	}
	return ""
}

export default function SocialShare({
	platform,
	button,
	channel_id,
	video_id,
}: {
	platform: PlatformType
	button?: React.ReactNode
	channel_id?: string
	video_id?: string
}) {
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
	if (platform === "youtube") {
		if (video_id) {
			return (
				<UniversalLink
					to={`https://www.youtube.com/watch?v=${video_id}&autoplay=1&loop=1`}
				>
					Youtube
				</UniversalLink>
			)
		}
		if (channel_id) {
			return (
				<UniversalLink
					to={`https://www.youtube.com/channel/${channel_id}?sub_confirmation=1`}
				>
					Youtube
				</UniversalLink>
			)
		}
	}
	if (platform === "pinterest") {
		return (
			<UniversalLink
				to={`https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
					getCurrentURL(),
				)}`}
			>
				Pinterest
			</UniversalLink>
		)
	}
}

// Pinterest save or follow
