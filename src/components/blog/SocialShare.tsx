import UniversalLink from "library/Loader/UniversalLink"
import { isBrowser } from "library/deviceDetection"
import { useEffect } from "react"
import styled from "styled-components"

type PlatformType = "linkedin" | "x" | "facebook"

const getCurrentURL = () => {
	if (isBrowser) {
		return window.location.href
	}
	return ""
}

const LinkedInButton = () => {
	useEffect(() => {
		const script = document.createElement("script")
		script.src = "https://platform.linkedin.com/in.js"
		script.type = "text/javascript"
		script.setAttribute("lang", "en_US")
		document.body.appendChild(script)

		return () => {
			document.body.removeChild(script)
		}
	}, [])

	return (
		<div>
			<script type="IN/Share" data-url={encodeURIComponent(getCurrentURL())} />
		</div>
	)
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
}

const Wrapper = styled.div`
  
`
