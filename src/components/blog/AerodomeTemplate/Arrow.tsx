import { ReactComponent as ArrowSVG } from "images/global/arrow.svg"
import type { UniversalLinkProps } from "library/Loader/UniversalLink"
import UniversalLink from "library/Loader/UniversalLink"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import data from "styles/blog/data"
import media from "styles/media"

const textStyles = data.projectTextStyles
const colors = data.projectColors

type PrimaryButtonProps = {
	dark?: boolean
	flipped?: boolean
	disabled?: boolean
	type: "button"
} & UniversalLinkProps

export default function ArrowButton({
	dark = false,
	flipped = false,
	disabled = false,
	...props
}: Omit<PrimaryButtonProps, "type">) {
	return (
		<Wrapper
			type="button"
			ariaLabel="change page button"
			$dark={dark}
			$flipped={flipped}
			aria-disabled={disabled ?? false}
			{...props}
		>
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
	left: 50%;
	transform: translate(-50%, -50%);
	transition: all 0.25s;
	align-self: center;
	${fresponsive(css`
		width: 9px;
	`)}

	${ftablet(css`
		width: 11px;
		position: relative;
	`)}

  ${fmobile(css`
		top: unset;
		left: unset;
		transform: translate(0, 0);
		position: relative;
		width: 9px;
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

	${ftablet(css`
		width: 46px;
		height: 20px;
		display: flex;
		flex-direction: row;
		align-items: center;
	`)}

  ${fmobile(css`
		width: 32px;
		height: 16px;
		display: flex;
		flex-direction: row;
		align-items: center;
	`)}
`

const Wrapper = styled(UniversalLink)<{
	$dark: boolean
	$flipped: boolean
}>`
	${textStyles.button4}
	color: ${({ $dark }) => ($dark ? colors.white : colors.black)};
	display: flex;
	align-items: center;
	justify-content: space-between;
	rotate: ${({ $flipped }) => ($flipped ? "180deg" : "0deg")};

	&[aria-disabled="true"] {
		pointer-events: none;
		${Arrow} {
			path {
				fill: ${colors.grey03};
			}
		}
	}

	svg {
		path {
			fill: ${({ $dark }) => ($dark ? colors.white : colors.black)};
		}
	}

	${media.hover} {
		&:hover {
			${Arrow} {
				${fresponsive(css`
					&:nth-of-type(2) {
						transform: translate(calc(10px - 50%), -50%);
					}

					&:nth-of-type(3) {
						transform: translate(calc(20px - 50%), -50%);
					}
				`)}
			}
		}
	}

	${fresponsive(css`
		height: 24px;
		width: 24px;
		border-radius: 8px;
		padding: 16px;
	`)}

	${fmobile(css`
		padding: 12px;
	`)}
`
