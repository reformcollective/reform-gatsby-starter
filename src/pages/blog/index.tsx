import Seo from "components/Seo"
import { type PageProps, graphql } from "gatsby"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { MobileOnly } from "library/breakpointUtils"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import { useParamState } from "library/useParamState"
import { useEffect } from "react"
import styled, { css } from "styled-components"
import data from "styles/blog/data"
import { trim } from "styles/text"
import { useSearchResults } from "utils/useSearchResults"

import BlogLayout from "components/blog/BlogLayout"
import Categories from "components/blog/Categories"
import ClearButton from "components/blog/ClearButton"
import EmailInput from "components/blog/EmailInput"
import LargeCard from "components/blog/LargeCard"
import SmallCard from "components/blog/SmallCard"

const textStyles = data.projectTextStyles
const colors = data.projectColors

/**
 * This file needs to be updated to match the new project's design.
 *
 * There are 8 TODOs in this file:
 * 1. Update the title and description in the SEO Head component.
 * 2. Optionally update the headerKicker prop in the 3 BlogLayout components.
 * 		The header does not have to have a kicker.
 * 3. The LargeCard component defaults to a placeholder button. Pass it a
 * 		custom button whenever the project buttons are ready.
 * 4. The CardGroup also has a placeholder button. A custom button can be
 * 		inserted into the CustomWidthButton styled component when ready.
 * 5. Once the custom button has been inserted into the CustomWidthButton
 * 		styled component, the PlaceholderButton styled component can be removed.
 *
 * Note: Each of these TODOs has a corresponding comment in the code.
 */

export default function BlogPage({ data }: PageProps<Queries.BlogPageQuery>) {
	const unfilteredCards = data.allContentfulPageBlogPost.nodes
	const featuredCard = data.contentfulPageBlogHub?.featuredBlogPost

	const restOfCards = unfilteredCards.filter(
		(card) => card.id !== featuredCard?.id,
	)
	const smallCards = restOfCards.slice(0, 9)
	const hasMoreCards = restOfCards.length > 9

	const [query] = useParamState("query")
	const [category] = useParamState("category")
	const [showAll, setShowAll] = useParamState("showAll")

	/**
	 * instant scroll to top on any query change
	 */
	// biome-ignore lint/correctness/useExhaustiveDependencies: allowable side effect
	useEffect(() => {
		ScrollSmoother.get()?.scrollTo(0)
	}, [query, category, showAll])

	const searchedCards = useSearchResults(
		query ?? "",
		[...unfilteredCards],
		["articleTextPreview", "author", "slug", "title"],
	)
	const categorizedCards = category
		? searchedCards.filter((card) => card.categories?.includes(category))
		: searchedCards

	if (Boolean(query) || Boolean(category))
		return (
			<BlogLayout
				// TODO remove the kicker or update with a project kicker when ready
				headerKicker={<PlaceholderButton>Example Kicker</PlaceholderButton>}
			>
				{(query || category) && (
					<HeaderWrapper>
						{query && category ? (
							<LightHeader>
								Search results for <span>“{query}”</span> in{" "}
								<span>{category}</span>
							</LightHeader>
						) : category ? (
							<Header>Categories / {category}</Header>
						) : (
							<LightHeader>
								Search results for <span>“{query}”</span>
							</LightHeader>
						)}
						<ClearButton />
					</HeaderWrapper>
				)}
				<CardGroup>
					{categorizedCards.map((card) => (
						<SmallCard key={card.id} data={card} />
					))}
					{categorizedCards.length === 0 && <div>No results found</div>}
				</CardGroup>
			</BlogLayout>
		)

	if (showAll) {
		return (
			<BlogLayout
				// TODO remove the kicker or update with a project kicker when ready
				headerKicker={<PlaceholderButton>Example Kicker</PlaceholderButton>}
			>
				<Header>All Articles</Header>
				<CardGroup>
					{unfilteredCards.map((card) => (
						<SmallCard key={card.id} data={card} />
					))}
				</CardGroup>
			</BlogLayout>
		)
	}

	return (
		<BlogLayout
			// TODO remove the kicker or update with a project kicker when ready
			headerKicker={<PlaceholderButton>Example Kicker</PlaceholderButton>}
		>
			{featuredCard && (
				<LargeCard
					data={featuredCard}
					// TODO insert a custom project button here
					// button={}
				/>
			)}
			<MobileOnly>
				<Categories />
			</MobileOnly>
			<Header>Previous Articles</Header>
			<CardGroup>
				{smallCards.map((card) => (
					<SmallCard key={card.id} data={card} />
				))}
			</CardGroup>
			{hasMoreCards && (
				// TODO remove the PlaceholderButton and uncomment the CustomWidthButton when the project buttons are ready
				<PlaceholderButton onClick={() => setShowAll("true")}>
					See All Articles
				</PlaceholderButton>
				// <CustomWidthButton
				// 	type="button"
				// 	onClick={() => {
				// 		setShowAll("true")
				// 	}}
				// >
				// 	See More
				// </CustomWidthButton>
			)}
			<MobileEmail>
				<EmailInput />
			</MobileEmail>
		</BlogLayout>
	)
}
// TODO change the title and description according to the project
export function Head() {
	return <Seo title="Starter | Blog" description="" pathname="/blog" />
}

const Header = styled.div`
  ${textStyles.sh1}
  ${trim(1.2)}
	color: ${colors.neutral700};

  ${fresponsive(css`
    margin-bottom: 18px;
  `)}

  ${fmobile(css`
		${textStyles.sh2}
    margin-bottom: 30px;
  `)}
`

const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	${fresponsive(css`
		padding-top: 12px;
		margin-bottom: 20px;
	`)}

	${fmobile(css`
		flex-direction: column-reverse;
		align-items: flex-start;
		gap: 24px;
	`)}
`

const LightHeader = styled(Header)`
	margin-bottom: unset;

	span {
		color: ${colors.neutral900};
	}
`

const CardGroup = styled.div`
  ${fresponsive(css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px 24px;
    margin-bottom: 55px;
  `)}
  ${ftablet(css`
    grid-template-columns: 1fr 1fr;
    gap: 35px 25px;
  `)}
  ${fmobile(css`
    grid-template-columns: 1fr;
    gap: 36px;
  `)}
`

// TODO uncomment this component and insert the desired button when the project buttons are ready
// const CustomWidthButton = styled()`
//   ${fresponsive(css`
//     width: 280px;
//   `)}
//   ${ftablet(css`
//     width: 100%;
//   `)}
//   ${fmobile(css`
//     width: 100%;
//   `)}
// `

// TODO this component can be removed once project buttons have been inserted above
const PlaceholderButton = styled.button`
${fresponsive(css`
  ${textStyles.sh3};
  border: 1px solid ${colors.neutralBlack};
  border-radius: 8px;
  width: fit-content;
  cursor: pointer;
  padding: 4px 6px;
`)}
`

const MobileEmail = styled(MobileOnly)`
  ${fmobile(css`
		border-top: 1px solid ${colors.neutral300};
    padding-top: 50px;
    margin-top: 50px;
  `)}
`

export const query = graphql`
  query BlogPage {
    allContentfulPageBlogPost(sort: { createdAt: DESC }) {
      nodes {
        slug
        id
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
    contentfulPageBlogHub {
      id
      featuredBlogPost {
        slug
        id
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
