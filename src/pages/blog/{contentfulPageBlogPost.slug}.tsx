import Seo from "components/Seo"
import { type PageProps, graphql } from "gatsby"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ReactComponent as PlaceholderSVG } from "images/blog/icons/placeholder.svg"
import UniversalLink from "library/Loader/UniversalLink"
import { usePinType } from "library/Scroll"
import { DesktopTabletOnly } from "library/breakpointUtils"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { getResponsivePixels } from "library/viewportUtils"
import { useRef } from "react"
import styled, { css } from "styled-components"
import data from "styles/blog/data"
import { desktopBreakpoint } from "styles/media"
import links from "utils/links"

import PostContent from "components/blog/PostContent"
import SmallCard from "components/blog/SmallCard"

const textStyles = data.projectTextStyles
const colors = data.projectColors

import SocialShare from "components/blog/SocialShare"

/**
 * This file needs to be updated to match the new project's design.
 *
 * There are 7 TODOs in this file:
 * 1. Use PostContent's CustomButton prop to add a project-specific button.
 * 2. Use Share's CustomButton prop to add a project-specific button.
 * 3. Remove any social media that is not needed from the socials prop in Share.
 * 4. Replace the "See All Articles" placeholder button with a project-specific button.
 * 5. Replace PlaceholderSVG in the StyledIcon component with a project-specific icon.
 * 6. Make any necessary changes to the colors and text styles in the styled components,
 *    particularly the "Back to Home" link in the Heading styled component.
 * 7. Remove the PlaceholderButton styled component once all other changes have been made.
 *
 * Note: Each of these TODOs has a corresponding comment in the code.
 */

export default function BlogPostPage({
	data: {
		contentfulPageBlogPost: post,
		allContentfulPageBlogPost: { nodes: recentArticles },
	},
}: PageProps<Queries.BlogPostQuery>) {
	const pin = useRef<HTMLDivElement>(null)
	const pinType = usePinType()

	useAnimation(() => {
		ScrollTrigger.create({
			trigger: pin.current,
			start: () => `top top+=${getResponsivePixels(120)}`,
			end: () =>
				// the height of the parent less the height of the pin
				`+=${
					(pin.current?.parentElement?.offsetHeight ?? 0) -
					(pin.current?.offsetHeight ?? 0)
				}`,
			pin: true,
			pinType,
		})
	}, [pinType])

	return (
		<Wrapper>
			<Inner>
				<Heading>
					<Link to={links.blog}>Blog</Link>
					<StyledIcon />
					<Light>{post?.title}</Light>
					<Link to={links.blog}>Back to Home</Link>
				</Heading>
				<Content>
					<div />
					{post ? (
						// TODO add a project button to the PostContent Button prop
						<PostContent
							post={post}
							// CustomButton={}
						/>
					) : (
						"Post not found."
					)}
					<DesktopTabletOnly>
						<Socials ref={pin}>
							{/* TODO add a project component to the Share CustomButton prop */}
							{/* <Share
								title={post?.title}
								// CustomButton={}

								// TODO remove any social media that is not needed
								socials={["linkedin", "twitter", "facebook"]}
							/> */}

							<SocialShare
								platforms={["linkedin", "x", "facebook", "youtube"]}
								channel_id="UCF1graXFkAeX7FHiI0fi5Lw"
								// video_id="KzHVSHHe8ss"
								// profile=""
								title={post?.title}
								image={post?.mainImage?.file?.url ?? ""}
							/>
						</Socials>
					</DesktopTabletOnly>
				</Content>
				<Related>
					<RelatedHeading>Recent Articles</RelatedHeading>
					{recentArticles.map((article) => (
						<SmallCard key={article.slug} data={article} />
					))}
				</Related>
				{/* TODO replace the PlaceholderButton below with a project-specific button */}
				<PlaceholderButton to={links.blog}>See All Articles</PlaceholderButton>
			</Inner>
		</Wrapper>
	)
}

export function Head({ data }: PageProps<Queries.BlogPostQuery>) {
	return (
		<Seo
			title={data.contentfulPageBlogPost?.title}
			description={data.contentfulPageBlogPost?.articleTextPreview}
			image={`https:${data.contentfulPageBlogPost?.mainImage?.file?.url ?? ""}`}
			// image={`https:${data.contentfulPageBlogPost?.ogImage?.resize?.src ?? ""}`}
			pathname={`/blog/${data.contentfulPageBlogPost?.slug ?? ""}`}
		/>
	)
}

// TODO replace PlaceholderSVG with whichever icon you want to use
const StyledIcon = styled(PlaceholderSVG)`
	${fresponsive(css`
		width: 12px;
		height: 12px;
	`)}
`

const Wrapper = styled.div`
	width: 100%;
	display: grid;
	place-items: center;
	background-color: ${colors.neutralWhite};
`

const Inner = styled.div`
	width: 100%;
	max-width: ${desktopBreakpoint}px;
	display: flex;
	flex-direction: column;
	align-items: center;

	${fresponsive(css`
		padding: 164px 156px 102px;
		gap: 48px;
	`)}

	${ftablet(css`
		padding: 166px 68px 100px;
	`)}

  ${fmobile(css`
		padding: 140px 24px;
		gap: 42px;
	`)}
`

const Link = styled(UniversalLink)`
	${textStyles.sh4}
	color: ${colors.neutral800};

	&:last-of-type {
		/* TODO uncomment and/or change the color as needed */

		/* color: ${colors.primary400}; */
	}

	${ftablet(css`
		${textStyles.sh3}
	`)}
`

const Heading = styled.div`
	display: flex;
	align-items: center;
	width: 100%;

	${fresponsive(css`
		gap: 14px;
		padding: 0 10px 20px;
		border-bottom: 1.5px solid ${colors.neutral300};
	`)}

	${fmobile(css`
		gap: 12px;
	`)}
`

const Light = styled.div`
	${textStyles.sh4}
	color: ${colors.neutral600};
	margin-right: auto;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 200px;

	${ftablet(css`
		${textStyles.sh3}
	`)}

	${fmobile(css`
		max-width: 85px;
	`)}
`

const Content = styled.div`
	display: grid;
	width: 100%;

	${fresponsive(css`
		grid-template-columns: 1fr 680px 1fr;
		margin-bottom: 70px;
	`)}

	${ftablet(css`
		grid-template-columns: 1fr 600px 1fr;
		margin-bottom: 100px;
	`)}

  ${fmobile(css`
		grid-template-columns: 0 314px 0;
		margin-bottom: 76px;
	`)}
`

const Socials = styled.div`
	${fresponsive(css`
		display: grid;
		place-items: start end;
		gap: 16px;
	`)}

	${fmobile(css`
		display: none;
	`)}
`

const Related = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	width: 100%;
	margin: 0 auto;

	${fresponsive(css`
		gap: 48px 24px;
	`)}

	${fmobile(css`
		grid-template-columns: 1fr;
		gap: 36px;
	`)}
`

const RelatedHeading = styled.div`
	grid-column: span 3;
	text-align: center;
	${textStyles.h6};
	color: ${colors.neutral700};

	${fmobile(css`
		grid-column: span 1;
		${textStyles.sh1};
		text-align: center;
		margin-bottom: -6px;
	`)}
`

// TODO this component can be removed once the project buttons have been inserted above
const PlaceholderButton = styled(UniversalLink)`
	${fresponsive(css`
		${textStyles.sh3};
		border: 1px solid ${colors.neutralBlack};
		border-radius: 8px;
		width: fit-content;
		cursor: pointer;
		padding: 4px 6px;
	`)}
`

export const query = graphql`
	query BlogPost($id: String) {
		contentfulPageBlogPost(id: { eq: $id }) {
			title
			slug
			articleTextPreview
			author {
				id
				headshot {
					gatsbyImageData
					createdAt
				}
				fullName
				roleAndCompany
			}
			mainImage {
				file {
					url
				}
				gatsbyImageData
				description
			}
			categories
			articleText {
				raw
			}
		}
		# get the three most recent blog posts that are not the current post
		allContentfulPageBlogPost(
			filter: { id: { nin: [$id, "e1d582e5-f8d2-52c5-a1eb-a758ee4a4f72"] } }
			sort: { createdAt: DESC }
			limit: 3
		) {
			nodes {
				slug
				id
				createdAt(formatString: "MMMM Do, YYYY")
				author {
					id
					headshot {
						gatsbyImageData
						createdAt
					}
					fullName
					roleAndCompany
				}
				title
				mainImage {
					gatsbyImageData
					description
				}
				categories
				articleTextPreview
			}
		}
	}
`
