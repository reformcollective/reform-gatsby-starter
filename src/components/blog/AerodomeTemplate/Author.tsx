import { ReactComponent as AuthorSVG } from "images/blog/AerodomeTemplate/user.svg"
import UniversalLink from "library/Loader/UniversalLink"
import { fresponsive } from "library/fullyResponsive"

import styled, { css } from "styled-components"
import data from "styles/blog/data"
import type { BlogPostCard } from "types/alias"

const textStyles = data.projectTextStyles
const colors = data.projectColors

export default function AuthorTag({
	className = "",
	blogAuthor,
}: {
	className?: string
	blogAuthor: BlogPostCard["blogAuthor"]
}) {
	if (!blogAuthor) {
		// handle the case when blogAuthor is null
		return null
	}
	const { name, slug } = blogAuthor

	return (
		<Author className={className} to={`/blog/${slug}`}>
			<Icon>
				<AuthorSVG />
			</Icon>
			{name} ↗
		</Author>
	)
}

const Author = styled(UniversalLink)`
	display: flex;
	align-items: center;
	color: ${colors.blue02};
	${textStyles.kicker3};

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
