import UniversalLink from "library/Loader/UniversalLink"
import { isBrowser } from "library/deviceDetection"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import data from "styles/blog/data"

const colors = data.projectColors

const getCurrentURL = () => {
	if (isBrowser) {
		return window.location.href
	}
	return ""
}

type SocialIcons = "linkedin" | "twitter" | "facebook"

type CustomButtonProps = {
	icon: SocialIcons
}

export default function Share({
	title,
	CustomButton = Placeholder,
	socials,
}: {
	title: string | undefined | null
	CustomButton?: React.FC<CustomButtonProps>
	socials?: SocialIcons[]
}) {
	return (
		title && (
			<>
				{socials?.includes("linkedin") && (
					<UniversalLink
						to={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
							getCurrentURL(),
						)}&title=${title}`}
					>
						<CustomButton icon="linkedin" />
					</UniversalLink>
				)}
				{socials?.includes("twitter") && (
					<UniversalLink
						to={`https://www.twitter.com/share?url=${getCurrentURL()}&text=${title}`}
					>
						<CustomButton icon="twitter" />
					</UniversalLink>
				)}
				{socials?.includes("facebook") && (
					<UniversalLink
						to={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
							getCurrentURL(),
						)}&t=${title}`}
					>
						<CustomButton icon="facebook" />
					</UniversalLink>
				)}
			</>
		)
	)
}

const Placeholder: React.FC<CustomButtonProps> = ({ icon }) => (
	<StyledPlaceholder>{icon}</StyledPlaceholder>
)

const StyledPlaceholder = styled.button`
	${fresponsive(css`
		border: 1px solid ${colors.neutralBlack};
		border-radius: 15px;
		width: fit-content;
		cursor: pointer;
		padding: 15px;
	`)}
`
