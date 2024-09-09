import { ReactComponent as ArrowSVG } from "images/global/arrow.svg"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"

import Pagination from "components/blog/AerodomeTemplate/Pagination"
import SmallBlogCard from "components/blog/AerodomeTemplate/SmallCard"
import UniversalLink from "library/Loader/UniversalLink"
import useMedia from "library/useMedia"
import { useMemo, useState } from "react"
import data from "styles/blog/data"
import type { BlogPostCard } from "types/alias"
import links from "utils/links"

const textStyles = data.projectTextStyles
const colors = data.projectColors

function renderListElements(
	allFilteredElements: readonly BlogPostCard[],
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

export default function BlogAuthorLayout({
	data,
}: {
	data: Queries.BlogAuthorQuery
}) {
	const [activePage, setActivePage] = useState(1)
	const resultsPerPage = useMedia(6, 6, 4, 2)

	const blogPosts = data?.allContentfulBlogPost?.nodes

	// Renders the list of parsed elements based on the activePage
	const allBlogPosts = useMemo(() => {
		if (!blogPosts.length) return

		return renderListElements(blogPosts, resultsPerPage, activePage)
	}, [activePage, blogPosts, resultsPerPage])

	const [hovered, setHovered] = useState(false)

	return (
		<Wrapper>
			<FilterStatus>
				<BreadCrumb
					onMouseLeave={() => setHovered(false)}
					onMouseEnter={() => setHovered(true)}
					to={links.blog}
					$hovered={hovered}
				>
					All Articles
				</BreadCrumb>
				<StyledArrow />
				<StatusText $hovered={hovered}> Author </StatusText>
			</FilterStatus>

			{allBlogPosts?.length ? (
				<>
					<AllBlogPosts id="all-blog-posts">{allBlogPosts}</AllBlogPosts>
					<Pagination
						totalElements={blogPosts.length}
						setActivePage={setActivePage}
						activePage={activePage}
						resultsPerPage={resultsPerPage}
						scrollTarget={"all-blog-posts"}
					/>
				</>
			) : (
				<NoResults>Mission Failure: No results found.</NoResults>
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
		padding-top: 0;
	`)}

  margin: 0 auto;
`

const FilterStatus = styled.div`
	display: flex;
	align-items: center;
	${fresponsive(css`
		${textStyles.h5};
		gap: 24px;
		margin: 0 0 64px;
	`)}
	color: ${colors.grey03};

	${ftablet(css`
		margin: 0 0 40px;
	`)}

	${fmobile(css`
		${textStyles.h8};
		gap: 12px;
		margin: 48px 0;
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

const AllBlogPosts = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: minmax(1fr, auto);

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

const NoResults = styled.div`
	${textStyles.h5};
	color: ${colors.red01_24};
	text-align: center;
	${fresponsive(css`
		margin-top: 180px;
	`)}

	${fmobile(css`
		${textStyles.h8};
		margin: 80px auto 0;
		width: 200px;
	`)}
`

const BreadCrumb = styled(UniversalLink)<{ $hovered: boolean }>`
	transition: color 0.4s ease-in-out;
	color: ${({ $hovered }) => ($hovered ? colors.black : colors.grey03)};
`
