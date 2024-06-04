import UniversalLink from "library/Loader/UniversalLink"
import { isBrowser } from "library/deviceDetection"

import { FacebookShareButton } from "react-share"
import { FacebookIcon } from "react-share"

type PlatformType = "linkedin" | "x" | "facebook" | "youtube" | "pinterest"

const getCurrentURL = () => {
	if (isBrowser) {
		return window.location.href
	}
	return ""
}

export default function SocialShare({
	platforms,
	button,
	channel_id,
	video_id,
	profile,
}: {
	platforms: PlatformType[]
	button?: React.ReactNode
	channel_id?: string
	video_id?: string
	profile?: string
}) {
	return (
		<>
			<FacebookShareButton url={`${encodeURIComponent(getCurrentURL())}`}>
				<FacebookIcon round />
			</FacebookShareButton>
			{platforms.includes("linkedin") && (
				<UniversalLink
					to={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
						getCurrentURL(),
					)}`}
				>
					LinkedIn
				</UniversalLink>
			)}
			{platforms.includes("x") && (
				<UniversalLink
					to={`https://x.com/intent/post?url=${encodeURIComponent(
						getCurrentURL(),
					)}`}
				>
					X
				</UniversalLink>
			)}
			{platforms.includes("facebook") && (
				<UniversalLink
					to={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
						getCurrentURL(),
					)}`}
				>
					Facebook
				</UniversalLink>
			)}
			{platforms.includes("youtube") && (
				<>
					{video_id ? (
						<UniversalLink
							to={`https://www.youtube.com/watch?v=${video_id}&autoplay=1&loop=1`}
						>
							Youtube
						</UniversalLink>
					) : channel_id ? (
						<UniversalLink
							to={`https://www.youtube.com/channel/${channel_id}?sub_confirmation=1`}
						>
							Youtube
						</UniversalLink>
					) : null}
				</>
			)}
			{platforms.includes("pinterest") && (
				<>
					{profile ? (
						<UniversalLink to={`https://www.pinterest.com/${profile}`}>
							Pinterest Follow
						</UniversalLink>
					) : (
						<UniversalLink
							to={`https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
								getCurrentURL(),
							)}`}
						>
							Pinterest
						</UniversalLink>
					)}
				</>
			)}
		</>
	)
}
