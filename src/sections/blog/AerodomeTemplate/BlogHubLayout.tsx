import { ReactComponent as Magnifying } from "images/blog/searchIcon.svg"
import { ReactComponent as ArrowSVG } from "images/global/arrow.svg"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"

import Close from "components/blog/AerodomeTemplate/Buttons/ExitSearch"
import { FilterCheckBox } from "components/blog/AerodomeTemplate/FilterCheckBox"
import LargeBlogCard from "components/blog/AerodomeTemplate/LargeCard"
import Newsletter from "components/blog/AerodomeTemplate/Newsletter"
import Pagination from "components/blog/AerodomeTemplate/Pagination"
import SmallBlogCard from "components/blog/AerodomeTemplate/SmallCard"
import { ReactComponent as WarningIcon } from "images/blog/warningTriangle.svg"
import UniversalLink from "library/Loader/UniversalLink"
import useMedia from "library/useMedia"
import { useEffect, useMemo, useState } from "react"
import data from "styles/blog/data"
import type { BlogHubQuery, BlogPostCard } from "types/alias"
import { useSearchResults } from "utils/useSearchResults"

const textStyles = data.projectTextStyles
const colors = data.projectColors

type BlogPost = Queries.BlogHubQuery["allContentfulBlogPost"]["nodes"][0]

function renderListElements(
	allFilteredElements: BlogPostCard[],
	resultsPerPage: number,
	activePage: number,
): JSX.Element[] {
	// Calculate the start and end index of the data to render
	const startIndex = (activePage - 1) * resultsPerPage
	const endIndex = startIndex + resultsPerPage

	// Slice the data array to get the data to render for the current page
	const dataToRender = allFilteredElements.slice(startIndex, endIndex)

	// Map over the data to create the list elements
	return dataToRender.map((post) => (
		<SmallBlogCard key={post.title} post={post} />
	))
}

export default function BlogHub({ data }: { data: BlogHubQuery }) {
	const [searchValue, setSearchValue] = useState("")
	const [activePage, setActivePage] = useState(1)
	const resultsPerPage = useMedia(6, 6, 4, 2)
	const buttonsToShow = useMedia(6, 6, 6, 3)
	const [lastUpdated, setLastUpdated] = useState<"searchValue" | "filterWords">(
		"searchValue",
	)
	const sliceIndex = useMedia(3, 3, 2, 2)

	const [filterWords, setFilterWords] = useState<string[]>([])
	const [hovered, setHovered] = useState(false)

	const blogPosts = data?.allContentfulBlogPost?.nodes
	// const blogPosts = data?.allContentfulBlogPost?.nodes.filter(
	// 	(post) =>
	// 		!post.manualPublishDate ||
	// 		(post.manualPublishDate &&
	// 			new Date(post.manualPublishDate) <= new Date()),
	// )

	const filters = data?.allContentfulBlogPost?.distinct
	const showCasePost = data?.contentfulBlogPage?.spotlightArticle
	const featuredArticles = data?.contentfulBlogPage?.featuredArticles

	const allFeaturedArticles = featuredArticles
		?.map((post) => {
			if (!post) return
			return <SmallBlogCard key={post?.title} post={post} />
		})
		.slice(0, sliceIndex)

	const mutableBlogPosts = [...blogPosts]

	const validBlogPosts = mutableBlogPosts
		.filter((item) => item !== undefined)
		.map((item) => ({
			...item,
			blogAuthor: { name: item.blogAuthor?.name || "" },
		}))

	// Updates State for search input change
	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
		setLastUpdated("searchValue")
		setActivePage(1)
	}

	const searchedElements = useSearchResults(searchValue, validBlogPosts, [
		"title",
		"summary",
		"category",
		"blogAuthor",
	])

	const allFilters = filters?.map((filter) => (
		<FilterCheckBox
			category={filter}
			setFilterWords={setFilterWords}
			filterWords={filterWords}
			setLastUpdated={setLastUpdated}
			lastUpdated={lastUpdated}
			key={filter}
		/>
	))

	// get Elements based on all filterWords
	const filteredElements = validBlogPosts.filter((post) => {
		const categories = post.category

		if (!categories || categories.length === 0) return false
		if (filterWords.length === 0) {
			return true
		}

		return categories.some((category) => {
			if (!category) return false
			return filterWords.includes(category)
		})
	})

	useEffect(() => {
		// If searchValue is updated, filter Words are reset
		if (lastUpdated === "searchValue") {
			setFilterWords([])
			setActivePage(1)
		}
	}, [lastUpdated])

	useEffect(() => {
		// If filterWords are updated, searchValue is reset
		if (lastUpdated === "filterWords") {
			setSearchValue("")
			setActivePage(1)
		}
	}, [lastUpdated])

	// Handles the the logic for returning the correct elements to render
	const filterTypeToUse = () => {
		if (searchValue && lastUpdated === "searchValue") {
			return searchedElements
		}

		if (filterWords.length && lastUpdated === "filterWords") {
			return filteredElements
		}

		return validBlogPosts
	}

	// Calls the renderListElements function to render the correct elements
	const elementsToRender = filterTypeToUse()

	// Renders the list of parsed elements based on the activePage
	const allBlogPosts = useMemo(() => {
		if (!elementsToRender || !elementsToRender.length) return

		const newArr = [...elementsToRender]

		const sortedData = newArr.sort((a, b) => {
			const aDate = a?.manualPublishDate
				? new Date(a.manualPublishDate)
				: a?.updatedAt
					? new Date(a.updatedAt)
					: a?.createdAt
						? new Date(a.createdAt)
						: new Date()
			const bDate = b?.manualPublishDate
				? new Date(b.manualPublishDate)
				: b?.updatedAt
					? new Date(b.updatedAt)
					: b?.createdAt
						? new Date(b.createdAt)
						: new Date()
			return bDate.getTime() - aDate.getTime()
		})

		// Todo: don't cast and resolve TS error.
		return renderListElements(
			sortedData as BlogPostCard[],
			resultsPerPage,
			activePage,
		)
	}, [activePage, elementsToRender, resultsPerPage])

	const handleBreadcrumbReset = () => {
		setFilterWords([])
		setSearchValue("")
		setLastUpdated("searchValue")
		setActivePage(1)
		setHovered(false)
	}

	return (
		<Wrapper>
			<SearchAndFiltering>
				<SearchWrapper>
					<Search
						onChange={(e) => handleSearchChange(e)}
						type="search"
						placeholder="Search Articles"
						value={searchValue}
						id="site-search"
						name="q"
					/>
					<IconWrapper>
						{!searchValue && <MagnifyingGlass />}
						{searchValue && (
							<StyledClose
								type="button"
								onClick={() => {
									setSearchValue("")
									setLastUpdated("searchValue")
								}}
							/>
						)}
					</IconWrapper>
				</SearchWrapper>

				<Filters>{allFilters}</Filters>
			</SearchAndFiltering>

			{!filterWords.length && !searchValue ? (
				<>
					<Top>
						<Newsletter />
						{showCasePost && <LargeBlogCard post={showCasePost} />}
					</Top>
					{typeof allFeaturedArticles !== "undefined" &&
						allFeaturedArticles.length && (
							<>
								<SectionHeading>Featured Articles</SectionHeading>
								<FeaturedArticles>{allFeaturedArticles}</FeaturedArticles>
							</>
						)}

					<SectionHeading>All Articles</SectionHeading>
				</>
			) : (
				<FilterStatus>
					<BreadCrumb
						onMouseLeave={() => setHovered(false)}
						onMouseEnter={() => setHovered(true)}
						$hovered={hovered}
						type="button"
						onClick={handleBreadcrumbReset}
					>
						All Articles
					</BreadCrumb>
					<StyledArrow />
					<StatusText $hovered={hovered}>
						{searchValue ? "Search" : "Filtered"}
					</StatusText>
				</FilterStatus>
			)}
			{allBlogPosts?.length ? (
				<>
					<AllBlogPosts id="all-blog-posts">{allBlogPosts}</AllBlogPosts>
					<Pagination
						totalElements={elementsToRender.length}
						setActivePage={setActivePage}
						activePage={activePage}
						resultsPerPage={resultsPerPage}
						scrollTarget={"all-blog-posts"}
						numberOfButtons={buttonsToShow}
					/>
				</>
			) : (
				<NoResults>
					<WarningIcon />
					Mission Failed. No results found.
				</NoResults>
			)}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	${fresponsive(css`
		width: 1360px;
		padding-top: 80px;
		align-items: center;
		gap: 40px;
	`)}

	${ftablet(css`
		width: 944px;
		gap: 80px;
	`)}

  ${fmobile(css`
		width: 343px;
		gap: 48px;
		padding-top: 40px;
	`)}

  margin: 0 auto;
`

const Top = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid ${colors.grey02};
	${fresponsive(css`
		align-items: center;
		margin: 80px 0;
		padding: 0 0 80px;
	`)}

	${ftablet(css`
		flex-direction: column-reverse;
		gap: 64px;
	`)}


  ${fmobile(css`
		flex-direction: column-reverse;
		gap: 64px;
		margin: 48px 0;
		padding: 0 0 48px;
	`)}
`

const SearchAndFiltering = styled.div`
	display: flex;
	flex-direction: column;

	${fresponsive(css`
		align-items: center;
		gap: 48px;
	`)}

	${fmobile(css`
		gap: 32px;
	`)}
`

const Search = styled.input`
	width: 96%;
	position: relative;

	&::-webkit-search-cancel-button,
	&::-webkit-search-decoration,
	&::-webkit-search-results-button,
	&::-webkit-search-results-decoration {
		display: none;
	}
	${textStyles.h3};

	${fresponsive(css`
		padding: 0 0 20px;
		height: 100px;
	`)}

	${ftablet(css`
		height: 130px;
	`)}

	${fmobile(css`
		${textStyles.h8};
		height: 50px;
		padding: 20px 0;
		margin: -20px 0;
	`)}

	color: ${colors.black};
	outline: none;
`

const Filters = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-wrap: wrap;
	${fresponsive(css`
		gap: 40px;
	`)}

	${fmobile(css`
		overflow-x: auto;
		flex-wrap: nowrap;
		align-items: center;
		height: 20px;
		width: 375px;
		padding: 0 16px;

		/* Hide scrollbar for Chrome, Safari and Opera */
		&::-webkit-scrollbar {
			display: none;
		}
	`)}
`

const SearchWrapper = styled.div`
	position: relative;
	width: 100%;
	border-bottom: 1px solid ${colors.grey02};
	${fresponsive(css`
		height: 120px;
		padding-bottom: 48px;
	`)}

	${fmobile(css`
		height: 48px;
		padding-bottom: 40px;
	`)}
`

const FilterStatus = styled.div`
	display: flex;
	align-items: center;
	${fresponsive(css`
		${textStyles.h5};
		gap: 24px;
		margin: 80px 0 64px;
	`)}
	color: ${colors.grey03};
	${fmobile(css`
		${textStyles.h8};
		gap: 12px;
	`)}
`

const StatusText = styled.span<{ $hovered: boolean }>`
	transition: color 0.4s ease-in-out;
	color: ${({ $hovered }) => ($hovered ? colors.grey03 : colors.black)};
`

const StyledArrow = styled(ArrowSVG)`
	${fresponsive(css`
		width: 23px;
		height: 41px;
	`)}

	${fmobile(css`
		width: 10px;
		height: 18px;
	`)}
`

const SectionHeading = styled.h2`
	${textStyles.h5};
	color: ${colors.black};
	${fresponsive(css`
		margin-bottom: 64px;
	`)}

	${fmobile(css`
		${textStyles.h8};
		margin-bottom: 32px;
	`)}
`

const FeaturedArticles = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;

	${fresponsive(css`
		margin-bottom: 80px;
	`)}

	${fmobile(css`
		gap: 16px;
		flex-direction: column;
		margin-bottom: 48px;
	`)}
`

const AllBlogPosts = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: minmax(1fr, 3);

	${fresponsive(css`
		margin-bottom: 80px;
		gap: 24px;
	`)}

	${ftablet(css`
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: minmax(1fr, auto);
	`)}

  ${fmobile(css`
		grid-template-columns: 1fr;
		gap: 16px;
		margin-bottom: 48px;
	`)}
`

const StyledClose = styled(Close)`
	position: relative;
	width: 100%;
	height: 100%;
`

const MagnifyingGlass = styled(Magnifying)`
	${fresponsive(css`
		position: absolute;
		height: 100%;
		width: 100%;
	`)}
`

const IconWrapper = styled.div`
	${fresponsive(css`
		width: 47px;
		height: 47px;
		position: absolute;
		bottom: 48px;
		right: 0;
	`)}

	${fmobile(css`
		width: 24px;
		height: 24px;
		position: absolute;
		bottom: 22px;
		right: 0;
	`)}
`

const NoResults = styled.div`
	${textStyles.kicker1};
	color: ${colors.red01};
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;

	${fresponsive(css`
		padding: 56px;
		gap: 32px;
		margin: 80px 0 200px;

		svg {
			width: 48px;
			height: 48px;
		}
	`)}

	${ftablet(css`
		${textStyles.kicker2};
		padding: 56px;
		margin: 64px 0 128px;
		gap: 32px;
	`)}

	${fmobile(css`
		${textStyles.kicker3};
		margin: 32px 0 40px;
		padding: 56px 0;
		gap: 24px;

		svg {
			width: 24px;
			height: 24px;
		}
	`)}
`

const BreadCrumb = styled(UniversalLink)<{ $hovered: boolean }>`
	transition: color 0.4s ease-in-out;
	color: ${({ $hovered }) => ($hovered ? colors.black : colors.grey03)};
`
