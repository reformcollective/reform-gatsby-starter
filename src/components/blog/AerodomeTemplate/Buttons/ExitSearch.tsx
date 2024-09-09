import { ReactComponent as CloseIconSVG } from "images/blog/exitSearch.svg"
import type { UniversalLinkProps } from "library/Loader/UniversalLink"
import UniversalLink from "library/Loader/UniversalLink"
import { fmobile, fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import media from "styles/media"

type Props = Omit<UniversalLinkProps & { type: "button" }, "children">

export default function Close(props: Props) {
	return (
		<Wrapper {...props}>
			<Icon />
		</Wrapper>
	)
}

const Icon = styled(CloseIconSVG)`
	transform: rotate(-180deg);
	transition: transform 0.3s;

	${fresponsive(css`
		width: 100%;
		height: 100%;
		display: block;
	`)}

	${fmobile(css`
		width: 22px;
		height: 22px;
	`)}
`

const Wrapper = styled(UniversalLink)`
	${media.hover} {
		&:hover {
			${Icon} {
				transform: rotate(180deg);
				transition: transform 0.3s;
				transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
			}
		}
	}

	${fresponsive(css`
		position: relative;
		width: 100%;
		height: 100%;
	`)}
`
