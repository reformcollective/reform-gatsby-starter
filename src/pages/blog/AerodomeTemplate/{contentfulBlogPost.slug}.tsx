import Seo from "components/Seo"
import TertiaryAlt from "components/blog/AerodomeTemplate/Buttons/TertiaryAlt"
import Newsletter from "components/blog/AerodomeTemplate/Newsletter"
import PostContent from "components/blog/AerodomeTemplate/PostContent"
import { useNavConfig } from "components/blog/AerodomeTemplate/Providers/MenuColor"
import SmallBlogCard from "components/blog/AerodomeTemplate/SmallCard"
import type { PageProps } from "gatsby"
import { graphql } from "gatsby"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { usePinType } from "library/Scroll"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import useMedia from "library/useMedia"
import { getResponsivePixels } from "library/viewportUtils"
import { useRef } from "react"
import { staticBackgroundStatic } from "sections/home/01-Hero/Static"
import Contact from "sections/home/07-Contact"
import styled, { css } from "styled-components"
import data from "styles/blog/data"
import links from "utils/links"

const textStyles = data.projectTextStyles
const colors = data.projectColors

export default function BlogPostPage({
	data: {
		contentfulBlogPost: post,
		allContentfulBlogPost: { nodes: recentArticles },
	},
	contactSection,
}: {
	data: PageProps<Queries.SingleBlogPostQuery>
	contactSection: JSX.Element
}) {
	useNavConfig({ menuDark: false, paused: true })

	const pin = useRef<HTMLDivElement>(null)
	const pinType = usePinType()
	const canPin = useMedia(true, true, false, false)
	const desktopTablet = useMedia(true, true, true, false)
	const articleAmount = useMedia(3, 3, 2, 2)

	const allRecentArticles = recentArticles?.filter((article) => {
		return (
			article?.category?.[0] === post?.category?.[0] &&
			article?.slug !== post?.slug
		)
	})

	// If there are less than 3 articles in the same category, fill the rest with the most recent articles of any type.

	if (allRecentArticles.length < articleAmount) {
		const remainingArticles = recentArticles.filter(
			(article) => article?.category?.[0] !== post?.category?.[0],
		)

		allRecentArticles.push(
			...remainingArticles.slice(0, articleAmount - allRecentArticles.length),
		)
	}

	useAnimation(() => {
		if (!canPin) return

		ScrollTrigger.create({
			trigger: pin.current,
			start: () => `top top+=${getResponsivePixels(120)}`,
			end: () =>
				// The height of the parent container less the height of the pin
				`+=${
					(pin.current?.parentElement?.offsetHeight ?? 0) -
					(pin.current?.offsetHeight ?? 0)
				}`,
			pin: true,
			pinType,
		})
	}, [pinType, canPin])

	return (
		<Wrapper>
			<Inner>
				<NewsLetterLane>
					<PinnedWrapper ref={pin}>
						<Newsletter isArticle />
						<Line />
						{desktopTablet && (
							<TertiaryAlt to={links.blog}>Back to Blog</TertiaryAlt>
						)}
					</PinnedWrapper>
				</NewsLetterLane>

				<Content>
					{post ? <PostContent post={post} /> : "Post not found."}
				</Content>
				{!desktopTablet && (
					<TertiaryAlt responsive to={links.blog}>
						Back to Blog
					</TertiaryAlt>
				)}
			</Inner>
			<Related>
				<RelatedHeading>Recommended Articles</RelatedHeading>
				<RelatedCards>
					{allRecentArticles.map((article) => (
						<SmallBlogCard key={article.slug} post={article} />
					))}
				</RelatedCards>
			</Related>
			<StyledContact />
		</Wrapper>
	)
}

export function Head({ data }: PageProps<Queries.SingleBlogPostQuery>) {
	return (
		<Seo
			title={data.contentfulBlogPost?.title}
			description={data.contentfulBlogPost?.summary}
			image={data.contentfulBlogPost?.mainBlogImage?.url ?? ""}
			pathname={`/blog/${data.contentfulBlogPost?.slug ?? ""}`}
		/>
	)
}

const Wrapper = styled.div`
	width: 100vw;
	display: grid;
	place-items: center;
	place-content: center;
	${staticBackgroundStatic};

	${ftablet(css`
		width: 1024px;
	`)}

	${fmobile(css`
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 375px;
	`)}
`

const Inner = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;

	${fresponsive(css`
		width: 1360px;
		padding-top: 80px;
		padding-bottom: 120px;
		border-bottom: 1px solid ${colors.grey02};
	`)}

	${ftablet(css`
		width: 944px;
		flex-direction: column;
		padding: 160px 0 0;
	`)}

  ${fmobile(css`
		flex-direction: column-reverse;
		padding: 40px 0;
		gap: 32px;
		width: 343px;
	`)}
`

const Content = styled.div`
	display: grid;
	width: 100%;

	${fresponsive(css`
		width: 974px;
	`)}

	${ftablet(css`
		width: 100%;
		margin-bottom: 100px;
	`)}

  ${fmobile(css`
		width: 343px;
	`)}
`

const Related = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	${fresponsive(css`
		width: 1360px;
		padding: 120px 0 0;
		gap: 64px;
	`)}

	${ftablet(css`
		width: 944px;
		padding: 80px 0 0;
		gap: 48px;
	`)}

	${fmobile(css`
		padding-top: 60px;
		gap: 40px;
	`)}
`
const NewsLetterLane = styled.div`
	${fresponsive(css`
		width: 322px;
	`)}

	${ftablet(css`
		width: 100%;
		padding-bottom: 32px;
	`)}

  ${fmobile(css`
		width: 100%;
	`)}
`

const RelatedCards = styled.div`
	display: flex;
	justify-content: center;

	${fresponsive(css`
		gap: 32px;
	`)}

	${ftablet(css`
		width: 944px;
		gap: 48px;
	`)}

  ${fmobile(css`
		flex-direction: column;
		width: 343px;
		gap: 24px;
	`)}
`

const PinnedWrapper = styled.div`
	position: relative;

	${fresponsive(css`
		height: calc(100vh - 200px);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	`)}

	${ftablet(css`
		height: auto;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	`)}

  ${fmobile(css`
		height: auto;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	`)}
`

const RelatedHeading = styled.div`
	grid-column: span 3;
	text-align: center;
	${textStyles.h5};
	color: ${colors.black};

	${fmobile(css`
		width: 100%;
		${textStyles.h8};
		text-align: center;
		margin-bottom: -6px;
	`)}
`

const Line = styled.div`
	${fresponsive(css`
		width: 100%;
		height: 1px;
		background-color: ${colors.grey02};
		display: none;
	`)}

	${ftablet(css`
		display: block;
		margin: 80px 0;
	`)}
`

const StyledContact = styled(Contact)`
	${fresponsive(css`
		padding-top: 176px;
	`)}
	${ftablet(css`
		padding-top: 184px;
	`)}
	${fmobile(css`
		padding-top: 120px;
	`)}
`

export const query = graphql`
	query SingleBlogPost($id: String) {
		contentfulBlogPost(
			id: { eq: $id }
		) # id: { eq: $id, ne: "0e9776cc-031e-5ded-a4ff-00db04c1d46a" }
		{
			blogAuthor {
				name
				slug
			}
			category
			updatedAt(formatString: "MMMM DD, YYYY")
			createdAt(formatString: "MMMM DD, YYYY")
			contentful_id
			mainBlogImage {
				gatsbyImageData(placeholder: NONE)
				description
				file {
					url
				}
				url
			}
			manualPublishDate(formatString: "MMMM DD, YYYY")
			summary
			id
			title
			slug
			blogArticle {
				raw
				references {
					... on ContentfulAsset {
						contentful_id
						id
						title
						description
						gatsbyImageData
						__typename
					}
					... on ContentfulCustomQuote {
						id
						contentful_id
						quoteText {
							quoteText
						}
						quoteAuthor
						__typename
					}
					... on ContentfulWhitepaperDownload {
						contentful_id
						id
						hubspotFormId
						title
						pdfFile {
							file {
								url
							}
						}
						description
						__typename
					}
					... on ContentfulYoutubeEmbed {
						contentful_id
						id
						title
						youtubeId
						__typename
					}
				}
			}
		}
		# get the three most recent blog posts that are not the current post

		allContentfulBlogPost(
			sort: { createdAt: DESC }
			filter: { id: { nin: [$id, "0e9776cc-031e-5ded-a4ff-00db04c1d46a"] } }
		) {
			nodes {
				blogAuthor {
					name
					slug
				}
				blogArticle {
					raw
				}
				category
				updatedAt(formatString: "MMMM DD, YYYY")
				createdAt(formatString: "MMMM DD, YYYY")
				contentful_id
				mainBlogImage {
					gatsbyImageData(placeholder: NONE)
				}
				manualPublishDate(formatString: "MMMM DD, YYYY")
				summary
				id
				title
				slug
			}
		}
	}
`
