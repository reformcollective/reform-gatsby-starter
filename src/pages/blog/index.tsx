import { Categories } from "components/blog/Categories"
import { LargeCard } from "components/blog/LargeCard"
import { SearchBar } from "components/blog/SearchBar"
import { SmallCard } from "components/blog/SmallCard"
import { type PageProps, graphql } from "gatsby"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import UniversalLink from "library/Loader/UniversalLink"
import { useParamState } from "library/useParamState"
import { useEffect } from "react"
import styled from "styled-components"
import { useSearchResults } from "utils/useSearchResults"

export default function TemplateBlogPage({
	data,
}: PageProps<Queries.BlogTemplateQuery>) {
	const allCards = data.allContentfulUnifiedTemplateBlogArticle.nodes

	// first card with featuredArticle
	const featuredCard = allCards.find((x) => x.featuredArticle)
	const allUnfeaturedCards = allCards.filter(
		(card) => card.id !== featuredCard?.id,
	)
	const firstPageCards = allUnfeaturedCards.slice(0, 9)
	const hasMoreThanOnePage = allUnfeaturedCards.length > 9

	const [query, setQuery] = useParamState("query")
	const [category, setCategory] = useParamState("category")
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
		[...allCards],
		["fields", "author", "slug", "title"],
	)
	const searchedAndCategorizedCards = category
		? searchedCards.filter((card) => card.categories?.includes(category))
		: searchedCards

	const view = query || category ? "search" : showAll ? "all" : "firstPage"

	return (
		<Wrapper>
			<div>pre blog content! anything can go here! make a component!</div>
			<SearchBar />
			<Categories />
			<div>
				{view === "all" && (
					<>
						<h1>all cards</h1>
						{allCards.map((card) => (
							<SmallCard key={card.id} />
						))}
					</>
				)}
				{view === "firstPage" && (
					<>
						<h1>normal blog display</h1>
						{featuredCard && <LargeCard />}
						{firstPageCards.map((card) => (
							<SmallCard key={card.id} />
						))}
						{hasMoreThanOnePage && (
							<UniversalLink type="button" onClick={() => setShowAll("true")}>
								show more
							</UniversalLink>
						)}
					</>
				)}
				{view === "search" && (
					<>
						{query && category ? (
							<h1>
								Search results for <span>“{query}”</span> in{" "}
								<span>{category}</span>
							</h1>
						) : category ? (
							<h1>Categories / {category}</h1>
						) : (
							<h1>
								Search results for <span>“{query}”</span>
							</h1>
						)}
						<UniversalLink
							type="button"
							onClick={() => {
								setQuery("")
								setCategory("")
							}}
						>
							clear all
						</UniversalLink>

						{searchedAndCategorizedCards.map((card) => (
							<SmallCard key={card.id} />
						))}
					</>
				)}
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	max-width: 1440px;
	margin: 0 auto;

	* {
		border: 1px solid red;
	}
`

export const query = graphql`
	query BlogTemplate {
		allContentfulUnifiedTemplateBlogArticle(
			sort: { fields: { calculatedDate: DESC } }
		) {
			nodes {
				id
				categories
				mainImage {
					gatsbyImageData
					description
				}
				title
				featuredArticle
				slug
				createdAt
				author {
					fullName
					roleAndCompany
					photo {
						gatsbyImageData
					}
				}
				fields {
					calculatedDate
					textPreview
				}
			}
		}
	}
`
