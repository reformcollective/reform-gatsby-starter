import { ReactComponent as ArrowSVG } from "images/global/arrow.svg"
import type { UniversalLinkProps } from "library/Loader/UniversalLink"
import UniversalLink from "library/Loader/UniversalLink"
import { fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import data from "styles/blog/data"

const textStyles = data.projectTextStyles
const colors = data.projectColors

type SecondaryButtonProps = {
	dark?: boolean
} & UniversalLinkProps

export default function Secondary({
	dark = false,
	children,
	...props
}: SecondaryButtonProps) {
	return (
		<Wrapper $dark={dark} {...props}>
			<Background />
			<Text>{children}</Text>
			<Text2>{children}</Text2>
			<Arrow />
			<Arrow2 />
		</Wrapper>
	)
}

const Background = styled.div`
	position: absolute;
	width: 150%;
	height: 150%;
	top: 100%;
	left: 50%;
	border-radius: 50%;
	transform: translate(-50%, 0%);
	transition: 0.5s;
	z-index: 2;
`

const Text = styled.div`
	${textStyles.button5}
	position: absolute;
	top: 50%;
	transform: translate(-50%, -50%);
	transition: 0.5s;
	left: 50%;
	z-index: 1;
	white-space: nowrap;
`

const Text2 = styled(Text)`
	transform: translate(-50%, 200%);
	opacity: 0;
	z-index: 3;
`

const Arrow = styled(ArrowSVG)`
	position: absolute;
	z-index: 3;
	height: auto;
	top: 50%;
	left: 0;
	transform: translate(-100%, -50%);
	transition: transform 0.5s;

	${fresponsive(css`
		width: 9px;
	`)}
`

const Arrow2 = styled(Arrow)`
	left: unset;
	right: 0;
	transform: translate(100%, -50%) rotate(180deg);
`

const Wrapper = styled(UniversalLink)<{ $dark: boolean }>`
	display: flex;
	position: relative;
	overflow: hidden;
	border: 1px solid ${({ $dark }) => ($dark ? colors.black : colors.white)};

	${Background} {
		background-color: ${({ $dark }) => ($dark ? colors.black : colors.white)};
	}

	${Text} {
		color: ${({ $dark }) => ($dark ? colors.black : colors.white)};
	}

	${Text2} {
		color: ${({ $dark }) => ($dark ? colors.white : colors.black)};
	}

	${Arrow} {
		path {
			fill: ${({ $dark }) => ($dark ? colors.white : colors.black)};
		}
	}

	&:hover {
		${Background} {
			transform: translate(-50%, -100%);
			border-radius: 0%;
		}

		${Text} {
			transform: translate(-50%, -250%);
			opacity: 0;
		}

		${Text2} {
			transform: translate(-50%, -50%);
			opacity: 1;
		}

		${Arrow} {
			transform: translate(50%, -50%);
		}

		${Arrow2} {
			transform: translate(-50%, -50%) rotate(180deg);
		}
	}

	${fresponsive(css`
		height: 38px;
		width: 135px;
		border-radius: 4px;
		padding: 0 28px;
	`)}

	${ftablet(css`
		width: 150px;
		height: 48px;
		padding: 0 33px;
	`)}
`
