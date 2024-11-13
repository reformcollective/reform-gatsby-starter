import UniversalLink from "library/Loader/UniversalLink"
import { isBrowser } from "library/deviceDetection"

const getCurrentURL = () => {
	if (isBrowser) {
		return window.location.href
	}
	return ""
}

export default function Share({ title }: { title: string | undefined | null }) {
	return (
		title && (
			<>
				<UniversalLink
					to={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
						getCurrentURL(),
					)}&title=${title}`}
				>
					LinkedIn
				</UniversalLink>
				<UniversalLink
					to={`https://www.twitter.com/share?url=${getCurrentURL()}&text=${title}`}
				>
					X
				</UniversalLink>
				<UniversalLink
					to={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
						getCurrentURL(),
					)}&t=${title}`}
				>
					Facebook
				</UniversalLink>
			</>
		)
	)
}
