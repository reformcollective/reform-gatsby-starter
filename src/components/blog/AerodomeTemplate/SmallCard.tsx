import { ReactComponent as DateSVG } from "images/blog/calendar.svg"
import { ReactComponent as CategorySVG } from "images/blog/category.svg"
import { ReactComponent as AuthorSVG } from "images/blog/user.svg"
import UniversalLink from "library/Loader/UniversalLink"
import UniversalImage from "library/UniversalImage"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"

import styled, { css } from "styled-components"
import data from "styles/blog/data"
import type { BlogPostCard } from "types/alias"

const textStyles = data.projectTextStyles
const colors = data.projectColors

export default function SmallBlogCard({
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
		<Wrapper
			ariaLabel="link to blog post"
			to={`/blog/${slug}`}
			className={className}
		>
			<TopRow>
				<Author>
					<Icon>
						<AuthorSVG />
					</Icon>
					{blogAuthor?.name}
				</Author>
				<PublishDate>
					<Icon>
						<DateSVG />
					</Icon>
					{publishDate}
				</PublishDate>
			</TopRow>
			<ImageWrapper>
				<BlogImage image={mainBlogImage?.gatsbyImageData} alt="" />
			</ImageWrapper>
			<Tag>
				<Icon>
					<CategorySVG />
				</Icon>
				{category?.[0]}
			</Tag>
			<Line />
			<TitleContent>
				<Title>{title}</Title>
				<Description>{summary}</Description>
			</TitleContent>
		</Wrapper>
	)
}

const TopRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	${textStyles.kicker4};

	${fresponsive(css`
		height: 16px;
	`)}
`

const Author = styled.div`
	display: flex;
	align-items: center;
	color: ${colors.grey04};
	${textStyles.kicker4};
	${fresponsive(css`
		gap: 6px;
	`)}
`

const PublishDate = styled.div`
	display: flex;
	align-items: center;
	color: ${colors.grey04};

	${fresponsive(css`
		gap: 6px;
	`)}
`

const BlogImage = styled(UniversalImage)`
	${fresponsive(css`
		width: 100%;
		height: 101%;
		border-radius: 8px;
		top: -0.5%;
	`)}

	${fmobile(css`
		width: 311px;
		height: 216px;
	`)}
`

const Wrapper = styled(UniversalLink)`
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	left: 0;
	z-index: 8;
	border: 1px solid ${colors.grey02};
	background-color: ${colors.white};
	transition: 0.3s ease-in-out;
	cursor: pointer;

	&:hover {
		${BlogImage} {
			img {
				transition: 0.3s ease-in-out;
				transform: scale(1.07);
			}
		}

		background-color: ${colors.grey01};
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
		height: 580px;
		width: 437px;
		padding: 16px;
		gap: 24px;
		border-radius: 16px;
	`)}

	${ftablet(css`
		height: 580px;
		width: 456px;
	`)}


  ${fmobile(css`
		width: 343px;
		height: auto;
		gap: 16px;
	`)}
`

const Line = styled.div`
	width: 100%;
	height: 1px;
	background-color: ${colors.grey02};

	${fmobile(css`
		margin: 8px 0;
	`)}
`

const TitleContent = styled.div`
	display: flex;
	flex-direction: column;
	${fresponsive(css`
		gap: 10px;
	`)}
`

const Title = styled.h2`
	${textStyles.blogH4};
	color: ${colors.black};
	line-height: 1;
`

const Description = styled.p`
	${textStyles.body3};
	color: ${colors.grey03};
`

const Tag = styled.div`
	${textStyles.kicker4};
	display: flex;
	align-items: center;
	color: ${colors.grey04};
	${fresponsive(css`
		gap: 6px;
	`)}
`

const Icon = styled.div`
	${fresponsive(css`
		width: 16px;
		height: 16px;
	`)}

	svg {
		width: 100%;
		height: 100%;
	}
`
const ImageWrapper = styled.div`
	position: relative;
	${fresponsive(css`
		width: 405px;
		height: 280px;
		border-radius: 8px;
		object-fit: cover;
	`)}
	${ftablet(css`
		width: 424px;
	`)}
	${fmobile(css`
		width: 311px;
		height: 216px;
	`)}
	overflow: clip;
`
