import UniversalImage from "library/UniversalImage"
import { DesktopTabletOnly, MobileOnly } from "library/breakpointUtils"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import data from "styles/blog/data"
import type { BlogPostContent } from "types/alias"
import Author from "./Author"
import CategoryTag from "./Category"
import DateTag from "./Date"
import RichText, { H1 } from "./RichComponents"

const colors = data.projectColors

export default function PostContent({ post }: { post: BlogPostContent }) {
	const {
		category,
		blogAuthor,
		blogArticle,
		title,
		mainBlogImage,
		createdAt,
		updatedAt,
		manualPublishDate,
	} = post

	const dateInfo = { createdAt, updatedAt, manualPublishDate }

	return (
		<Wrapper>
			<ArticleImage
				image={mainBlogImage?.gatsbyImageData}
				alt={mainBlogImage?.description ?? "broken image"}
			/>

			{blogAuthor && (
				<Row>
					<SmallRow>
						<Author blogAuthor={blogAuthor} />
						<LineEl />
						<DateTag dates={dateInfo} />
					</SmallRow>

					<MobileColumn>
						<Author blogAuthor={blogAuthor} />
						<Line />
						<DateTag dates={dateInfo} />
						<Line />
						{category?.[0] && <CategoryTag categoryText={category[0]} />}
						<Line />
					</MobileColumn>

					<DesktopTabletOnly>
						{category?.[0] && <CategoryTag categoryText={category[0]} />}
					</DesktopTabletOnly>
				</Row>
			)}
			<BlogTitle>{title}</BlogTitle>
			<RichText content={blogArticle} />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;

	${fresponsive(css`
		width: 974px;
		gap: 24px;
	`)}

	${ftablet(css`
		width: 944px;
	`)}

	  ${fmobile(css`
		width: 343px;
		gap: 32px;
	`)}
`

const ArticleImage = styled(UniversalImage)`
	width: 100%;

	${fresponsive(css`
		border-radius: 24px;
		aspect-ratio: 974 / 548;
	`)}

	${ftablet(css`
		aspect-ratio: 944 / 531;
	`)}

  ${fmobile(css`
		aspect-ratio: 343 / 193;
	`)}
`

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid ${colors.grey02};

	${fresponsive(css`
		gap: 24px;
		padding-bottom: 24px;
		margin-bottom: 20px;
	`)}

	${fmobile(css`
		flex-direction: column;
		gap: 16px;
		border-bottom: none;
		padding-bottom: 0;
		margin-bottom: 0;
	`)}
`

const SmallRow = styled(DesktopTabletOnly)`
	display: flex;
	align-items: center;

	${fresponsive(css`
		gap: 24px;
	`)}

	${fmobile(css`
		display: none;
	`)}
`

const LineEl = styled.div`
	background-color: ${colors.grey02};
	${fresponsive(css`
		width: 1px;
		height: 24px;
	`)}
`

const Line = styled.div`
	width: 100%;
	height: 1px;
	background-color: ${colors.grey02};

	${fmobile(css`
		margin: 20px 0;
	`)}
`

const MobileColumn = styled(MobileOnly)`
	${fmobile(css`
		display: flex;
		flex-direction: column;
	`)}
`

const BlogTitle = styled(H1)``
