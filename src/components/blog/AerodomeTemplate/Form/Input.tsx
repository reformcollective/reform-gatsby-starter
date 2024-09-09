import { fmobile } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import data from "styles/blog/data"

const textStyles = data.projectTextStyles
const colors = data.projectColors

const Input = styled.input`
	${textStyles.body2};
	padding-bottom: 14px;
	color: ${colors.white};
	caret-color: white;
	border-bottom: 1px solid ${colors.grey04};
	transition: 0.2s ease-in-out;
	transition-property: border-bottom, color;
	width: 100%;
	display: block;
	padding-right: 20%;

	${fmobile(css`
		padding-right: 30%;
	`)}

	&::placeholder {
		color: ${colors.grey04};
		transition: inherit;
	}

	&:hover {
		border-bottom: 1px solid ${colors.grey03};

		&::placeholder {
			color: ${colors.grey03};
		}
	}

	&:focus-visible {
		outline: none;
		border-bottom: 1px solid ${colors.white};
	}

	&[data-invalid] {
		color: ${colors.red01};
		border-bottom: 1px solid ${colors.red01};

		&::placeholder {
			color: ${colors.red01};
		}
	}
`

export default Input
