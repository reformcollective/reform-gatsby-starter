import { ReactComponent as DateSVG } from "images/blog/AerodomeTemplate/calendar.svg"
import { ReactComponent as CategorySVG } from "images/blog/AerodomeTemplate/category.svg"
import { ReactComponent as AuthorSVG } from "images/blog/AerodomeTemplate/user.svg"
import UniversalLink from "library/Loader/UniversalLink"
import UniversalImage from "library/UniversalImage"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"

import styled, { css } from "styled-components"
import data from "styles/blog/data"
import type { BlogPostCard } from "types/alias"

const textStyles = data.projectTextStyles
const colors = data.projectColors

export default function LargeBlogCard({
	className = "",
	post,
}: {
	className?: string
	post: BlogPostCard
}) {
	const {
		title,
		summary,
		manualPublishDate,
		createdAt,
		updatedAt,
		blogAuthor,
		category,
		mainBlogImage,
		slug,
	} = post

	const publishDate = manualPublishDate || updatedAt || createdAt

	return (
		<Wrapper to={`/blog/${slug}`} className={className}>
			<ImageWrapper>
				<BlogImage image={mainBlogImage?.gatsbyImageData} alt={"blog"} />
			</ImageWrapper>
			<TitleContent>
				<UpperContent>
					<Title>{title}</Title>
					<Description>{summary}</Description>
				</UpperContent>
				<InfoColumn>
					<Author>
						<Icon>
							<AuthorSVG />
						</Icon>
						{blogAuthor?.name}
					</Author>
					<Line />
					<PublishDate>
						<Icon>
							<DateSVG />
						</Icon>
						{publishDate}
					</PublishDate>
					<Line />
					<Tag>
						<Icon>
							<CategorySVG />
						</Icon>
						{category?.[0]}
					</Tag>
				</InfoColumn>
			</TitleContent>
		</Wrapper>
	)
}

const InfoColumn = styled.div`
	${textStyles.kicker3};
	display: flex;
	flex-direction: column;

	${fresponsive(css`
		gap: 16px;
	`)}
`

const Author = styled.div`
	display: flex;
	align-items: center;

	${fresponsive(css`
		gap: 6px;
	`)}
`

const PublishDate = styled.div`
	display: flex;
	align-items: center;

	${fresponsive(css`
		gap: 6px;
	`)}
`

const BlogImage = styled(UniversalImage)`
	${fresponsive(css`
		width: 100%;
		height: 102%;
		top: -1%;
	`)}

	img {
		transform-origin: center;
	}
`

const Wrapper = styled(UniversalLink)`
	display: flex;
	flex-shrink: 0;
	left: 0;
	z-index: 8;
	position: relative;
	border: 1px solid ${colors.grey02};
	background-color: ${colors.white};
	transition: 0.2s ease-in-out;

	&:hover {
		${BlogImage} {
			img {
				transition: 0.2s ease-in-out;
				transform: scale(1.1);
			}
		}

		background: ${colors.grey01};
	}

	&:not(:hover) {
		${BlogImage} {
			img {
				transition: 0.2s ease-in-out;
				transform: scale(1);
			}
		}
	}

	${fresponsive(css`
		width: 1014px;
		height: 526px;
		border-radius: 24px;
	`)}

	${ftablet(css`
		width: 100%;
		height: 526px;
	`)}

  ${fmobile(css`
		flex-direction: column;
		width: 343px;
		height: auto;
	`)}
`

const TitleContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	${fresponsive(css`
		width: calc(100% - 526px);
		padding: 24px;
	`)}

	${fmobile(css`
		width: 100%;
		padding: 16px;
	`)}
`

const Title = styled.h2`
	${textStyles.blogH2Alt};
	color: ${colors.black};
	line-height: 1;

	${fresponsive(css`
		margin-bottom: 24px;
	`)}

	${ftablet(css`
		margin-bottom: 16px;
	`)}

  ${fmobile(css`
		${textStyles.blogH4};
		margin-bottom: 16px;
	`)}
`

const Description = styled.p`
	${textStyles.body2};
	color: ${colors.grey03};

	${ftablet(css`
		${textStyles.body3};
	`)}

	${fmobile(css`
		${textStyles.body3};
		margin-bottom: 32px;
	`)}
`

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

const Line = styled.div`
	width: 100%;
	height: 1px;
	background-color: ${colors.grey02};
`

const UpperContent = styled.div``

const ImageWrapper = styled.div`
	position: relative;
	${fresponsive(css`
		width: 526px;
		height: 100%;
		border-radius: 24px 0 0 24px;
	`)}
	${fmobile(css`
		width: 343px;
		height: 345px;
		border-radius: 8px 8px 0 0;
	`)}
	overflow: clip;
`
