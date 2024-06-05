import UniversalLink from "library/Loader/UniversalLink"
import { isBrowser } from "library/deviceDetection"

import {
	FacebookShareButton,
	PinterestShareButton,
	TwitterShareButton,
} from "react-share"
import { FacebookIcon, LinkedinIcon, PinterestIcon, XIcon } from "react-share"
import YouTubeIcon from "utils/YoutubeIcon"

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
	title,
	image,
}: {
	platforms: PlatformType[]
	button?: React.ReactNode
	channel_id?: string
	video_id?: string
	profile?: string
	title?: string | null | undefined
	image?: string | null | undefined
}) {
	return (
		<>
			{platforms.includes("facebook") && (
				<FacebookShareButton url={`${encodeURIComponent(getCurrentURL())}`}>
					<FacebookIcon round />
				</FacebookShareButton>
			)}

			{platforms.includes("linkedin") && (
				<UniversalLink
					to={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
						getCurrentURL(),
					)}`}
				>
					<LinkedinIcon round />
				</UniversalLink>
			)}

			{platforms.includes("x") && (
				<TwitterShareButton url={`${getCurrentURL()}`}>
					<XIcon round />
				</TwitterShareButton>
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
							<YouTubeIcon round />
						</UniversalLink>
					) : null}
					{channel_id ? (
						<UniversalLink
							to={`https://www.youtube.com/channel/${channel_id}?sub_confirmation=1`}
						>
							<YouTubeIcon round />
						</UniversalLink>
					) : null}
				</>
			)}

			{platforms.includes("pinterest") && (
				<>
					{profile ? (
						<UniversalLink to={`https://www.pinterest.com/${profile}`}>
							<PinterestIcon round />
						</UniversalLink>
					) : (
						// <UniversalLink
						// 	to={`https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
						// 		getCurrentURL(),
						// 	)}`}
						// >
						// 	<PinterestIcon round />
						// </UniversalLink>
						<PinterestShareButton
							url={`${getCurrentURL()}`}
							media={image || ""}
						>
							<PinterestIcon round />
						</PinterestShareButton>
					)}
				</>
			)}
		</>
	)
}
