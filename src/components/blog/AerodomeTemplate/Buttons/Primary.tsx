import { ReactComponent as ArrowSVG } from "images/global/arrow.svg"
import type { UniversalLinkProps } from "library/Loader/UniversalLink"
import UniversalLink from "library/Loader/UniversalLink"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import data from "styles/blog/data"

const textStyles = data.projectTextStyles
const colors = data.projectColors

type PrimaryButtonProps = {
	dark?: boolean
} & UniversalLinkProps

export default function Primary({
	dark = false,
	children,
	...props
}: PrimaryButtonProps) {
	return (
		<Wrapper $dark={dark} {...props}>
			{children}
			<Arrows>
				<Arrow />
				<Arrow />
				<Arrow />
			</Arrows>
		</Wrapper>
	)
}

const Arrow = styled(ArrowSVG)`
	position: absolute;
	height: auto;
	top: 50%;
	transform: translateY(-50%);
	transition: right 0.25s;

	${fresponsive(css`
		width: 9px;
	`)}
`

const Wrapper = styled(UniversalLink)<{ $dark: boolean }>`
	${textStyles.button4}
	background-color: ${({ $dark }) => ($dark ? colors.black : colors.white)};
	color: ${({ $dark }) => ($dark ? colors.white : colors.black)};
	display: flex;
	align-items: center;
	justify-content: space-between;

	svg {
		path {
			fill: ${({ $dark }) => ($dark ? colors.white : colors.black)};
		}
	}

	&:hover {
		${Arrow} {
			${fresponsive(css`
				&:nth-of-type(1) {
					right: 0;
				}

				&:nth-of-type(2) {
					right: 10px;
				}

				&:nth-of-type(3) {
					right: 20px;
				}
			`)}
		}
	}

	&:active {
		${Arrow} {
			${fresponsive(css`
				&:nth-of-type(1) {
					right: 0;
				}

				&:nth-of-type(2) {
					right: 7px;
				}

				&:nth-of-type(3) {
					right: 14px;
				}
			`)}
		}
	}

	${fresponsive(css`
		height: 56px;
		width: 300px;
		border-radius: 8px;
		padding: 16px;
	`)}

	${ftablet(css`
		height: 64px;
	`)}

  ${fmobile(css`
		width: 100%;
	`)}
`

const Arrows = styled.div`
	position: relative;

	${Arrow} {
		right: 0;
	}

	${fresponsive(css`
		width: 40px;
		height: 24px;
	`)}
`
