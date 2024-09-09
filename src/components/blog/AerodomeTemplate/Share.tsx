import { ReactComponent as FacebookIcon } from "images/global/facebook.svg"
import { ReactComponent as LinkedinIcon } from "images/global/linkedin.svg"
import { ReactComponent as XIcon } from "images/global/twitter.svg"
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

const getCurrentPageTitle = () => {
	if (isBrowser) {
		return document.title
	}
	return ""
}

export default function Share({ title }: { title: string | undefined | null }) {
	return (
		<Wrapper>
			<ShareItem
				to={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
					getCurrentURL(),
				)}&t=${title}`}
			>
				<FacebookIcon />
			</ShareItem>
			<ShareItem
				to={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
					getCurrentURL(),
				)}&title=${getCurrentPageTitle()}`}
			>
				<LinkedinIcon />
			</ShareItem>
			<ShareItem
				to={`https://www.twitter.com/share?url=${getCurrentURL()}&text=${title}`}
			>
				<XIcon />
			</ShareItem>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	${fresponsive(css`
		display: flex;
		width: 144px;
		position: absolute;
		bottom: 0;
		left: 24px;
		justify-content: space-between;
		align-items: flex-end;

		svg {
			position: relative;
			display: block;
			transition: fill 0.3s;
			width: 24px;
			height: 24px;

			path {
				fill: ${colors.black};
			}
		}
	`)}
`

const ShareItem = styled(UniversalLink)`
	&:hover {
		svg {
			path {
				fill: ${colors.grey04};
			}
		}
	}

	&:active {
		svg {
			path {
				fill: ${colors.grey03};
			}
		}
	}
`
