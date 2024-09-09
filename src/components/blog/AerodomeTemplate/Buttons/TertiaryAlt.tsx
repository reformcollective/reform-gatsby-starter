import { ReactComponent as ArrowSVG } from "images/global/arrow.svg"
import type { UniversalLinkProps } from "library/Loader/UniversalLink"
import UniversalLink from "library/Loader/UniversalLink"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import data from "styles/blog/data"
import media from "styles/media"

const textStyles = data.projectTextStyles
const colors = data.projectColors

type TertiaryButtonProps = {
	dark?: boolean
	responsive?: boolean
} & UniversalLinkProps

export default function TertiaryAlt({
	dark = false,
	responsive = false,
	children,
	...props
}: TertiaryButtonProps) {
	return (
		<Wrapper {...props}>
			<Inner $dark={dark}>
				<Arrow />
				{children}
			</Inner>
		</Wrapper>
	)
}

const Arrow = styled(ArrowSVG)`
	height: auto;
	transform: rotate(180deg);
	${fresponsive(css`
		width: 9px;
	`)}
`

const Inner = styled.div<{ $dark: boolean }>`
	${textStyles.button5};
	position: relative;
	display: flex;
	align-items: center;
	color: ${({ $dark }) => ($dark ? colors.white : colors.black)};
	transition: transform 0.5s;

	svg {
		path {
			fill: ${({ $dark }) => ($dark ? colors.white : colors.black)};
		}
	}

	${fresponsive(css`
		transform: translateX(-17px);
		gap: 8px;
	`)}

	${ftablet(
		css`
			transform: translateX(0);

			${Arrow} {
				transform: rotate(180deg);
			}
		`,
	)}



		${fmobile(
			css`
			transform: translateX(0);

			${Arrow} {
				transform: rotate(180deg);
			}
		`,
		)}
`

const Wrapper = styled(UniversalLink)`
	width: fit-content;
	overflow: clip;

	${media.hover} {
		&:hover {
			${Inner} {
				transform: translateX(0);
			}
		}
	}

	&:active {
		${Inner} {
			transform: translateX(0);
		}
	}
`
