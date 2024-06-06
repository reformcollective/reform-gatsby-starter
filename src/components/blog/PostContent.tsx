import UniversalLink, {
	type UniversalLinkProps,
} from "library/Loader/UniversalLink"
import UniversalImage from "library/UniversalImage"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import type { ReactNode } from "react"
import React from "react"
import styled, { css } from "styled-components"
import data from "styles/blog/data"
import { trim } from "styles/text"
import type { BlogPost } from "types/alias"
import Author from "./Author"
import RichText from "./RichComponents"

const textStyles = data.projectTextStyles
const colors = data.projectColors

export default function PostContent({
	post,
	CustomButton,
}: {
	post: BlogPost
	CustomButton?: (props: UniversalLinkProps) => ReactNode
}) {
	const { author, title, mainImage, categories, articleText } = post

	return (
		<Wrapper>
			<Title>{title}</Title>
			{author && (
				<Row>
					<Author data={author} />
				</Row>
			)}
			<ArticleImage
				image={mainImage?.gatsbyImageData}
				alt={mainImage?.description ?? "broken image"}
			/>
			<Categories>
				{categories?.filter(Boolean).map((category: string) => (
					<React.Fragment key={category}>
						{CustomButton ? (
							<CustomButton to={`/blog?category=${category}`}>
								{category}
							</CustomButton>
						) : (
							<Category to={`/blog?category=${category}`}>{category}</Category>
						)}
					</React.Fragment>
				))}
			</Categories>
			<RichText content={articleText} />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	${fresponsive(css`
		border-bottom: 1.5px solid ${colors.neutral300};
		padding-bottom: 32px;
		gap: 24px;
	`)}

	${ftablet(css`
		padding-bottom: 0;
	`)}
`

const Title = styled.h1`
	${textStyles.h6}

	${fmobile(css`
		${textStyles.sh1}
	`)}
`

const ArticleImage = styled(UniversalImage)`
	aspect-ratio: 680 / 442;
	width: 100%;

	${fresponsive(css`
		border-radius: 24px;
	`)}

	${ftablet(css`
		aspect-ratio: 600 / 442;
	`)}

  ${fmobile(css`
		aspect-ratio: 314 / 186;
	`)}
`

const Categories = styled.div`
	display: flex;
	flex-wrap: wrap;

	${fresponsive(css`
		gap: 8px;
	`)}
`

export const Category = styled(UniversalLink)`
	${trim(1.3)}
	display: flex;
	${textStyles.sh4}

	${fresponsive(css`
		padding: 12px 24px;
		border-radius: 10px;
		border: 1.5px solid ${colors.neutral200};
		color: ${colors.neutral700};
	`)}
`

const Row = styled.div`
	display: flex;
	justify-content: space-between;
`
