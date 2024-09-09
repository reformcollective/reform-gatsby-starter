import { ReactComponent as CategorySVG } from "images/blog/AerodomeTemplate/category.svg"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import data from "styles/blog/data"

const textStyles = data.projectTextStyles

export default function CategoryTag({
	className = "",
	categoryText = "",
}: {
	className?: string
	categoryText: string
}) {
	return (
		<Tag className={className}>
			<Icon>
				<CategorySVG />
			</Icon>
			{categoryText}
		</Tag>
	)
}

const Tag = styled.div`
	${textStyles.kicker3};
	display: flex;
	align-items: center;

	${fresponsive(css`
		gap: 6px;
	`)}
`

const Icon = styled.div`
	${fresponsive(css`
		width: 24px;
		height: 24px;
	`)}

	svg {
		width: 100%;
		height: 100%;
	}
`
