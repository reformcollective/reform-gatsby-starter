import Seo from "components/Seo"
import { Categories } from "components/blog/Categories"
import { LargeCard } from "components/blog/LargeCard"
import { SearchBar } from "components/blog/SearchBar"
import { SmallCard } from "components/blog/SmallCard"
import { type HeadProps, type PageProps, graphql } from "gatsby"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import UniversalLink from "library/Loader/UniversalLink"
import { useParamState } from "library/useParamState"
import { useSearchResults } from "library/useSearchResults"
import { useEffect } from "react"
import styled from "styled-components"

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
		if (query || category) setShowAll(null)
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
						<Grid>
							{allCards.map((card) => (
								<SmallCard
									image={card.mainImage}
									preview={card.fields?.textPreview}
									published={card.fields?.calculatedDate}
									slug={card.slug}
									title={card.title}
									key={card.id}
									author={card.author}
								/>
							))}
						</Grid>
					</>
				)}
				{view === "firstPage" && (
					<>
						<h1>normal blog display</h1>
						{featuredCard && (
							<LargeCard
								image={featuredCard.mainImage}
								preview={featuredCard.fields?.textPreview}
								published={featuredCard.fields?.calculatedDate}
								slug={featuredCard.slug}
								title={featuredCard.title}
								key={featuredCard.id}
								author={featuredCard.author}
							/>
						)}
						<Grid>
							{firstPageCards.map((card) => (
								<SmallCard
									image={card.mainImage}
									preview={card.fields?.textPreview}
									published={card.fields?.calculatedDate}
									slug={card.slug}
									title={card.title}
									key={card.id}
									author={card.author}
								/>
							))}
						</Grid>
						{hasMoreThanOnePage && (
							<UniversalLink type="button" onClick={() => setShowAll("true")}>
								show all
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

						<Grid>
							{searchedAndCategorizedCards.map((card) => (
								<SmallCard
									image={card.mainImage}
									preview={card.fields?.textPreview}
									published={card.fields?.calculatedDate}
									slug={card.slug}
									title={card.title}
									key={card.id}
									author={card.author}
								/>
							))}
						</Grid>
					</>
				)}
			</div>
		</Wrapper>
	)
}

export const Head = ({ location }: HeadProps) => {
	return (
		<Seo
			title="Blog"
			description={"blog template starter"}
			gatsbyPathname={location.pathname}
		/>
	)
}

const Wrapper = styled.div`
	max-width: 1024px;
	margin: 0 auto;
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
					slug
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
