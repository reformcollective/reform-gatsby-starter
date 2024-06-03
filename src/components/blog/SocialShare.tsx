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
		return <LinkedInButton />
	}
}

const Wrapper = styled.div`
  
`
