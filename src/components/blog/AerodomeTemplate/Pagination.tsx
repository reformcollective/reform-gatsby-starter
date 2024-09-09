import gsap from "gsap"
import UniversalLink from "library/Loader/UniversalLink"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import type { Dispatch, SetStateAction } from "react"
import { useCallback, useEffect, useMemo, useState } from "react"
import styled, { css } from "styled-components"
import data from "styles/blog/data"
import media from "styles/media"
import ArrowButton from "./Arrow"

const textStyles = data.projectTextStyles
const colors = data.projectColors

interface PaginationProps {
	/**
	The total number of elements. To be dynamic this should be the length of the array you are paginating
	 */
	totalElements: number
	/**
	pass in the setActivePage function from the parent component. This will be used to update the active page when a page is clicked
	 */
	setActivePage: Dispatch<SetStateAction<number>>
	/**
	The Active Page. This is passed in from a parent and will be dynamic
	 */
	activePage: number
	/**
	How many results to show per page. 
	 */
	resultsPerPage: number
	/**
	The element id to scroll to when a page is clicked. To reset to top of elements list.
	 */
	scrollTarget: string
	/**
	The Number of buttons to show in the pagination on first render. So if you have 10 pages and numberOfButtons is 6, you will see 1, 2, 3, 4, 5, 6, ..., 10. If you have 4 you will see 1, 2, 3, 4, ..., 10. 
	 */
	numberOfButtons?: number
}

const addZero = (num: number) => {
	return num < 10 ? `0${num}` : num
}

export default function Pagination({
	totalElements,
	setActivePage,
	activePage,
	resultsPerPage,
	scrollTarget,
	numberOfButtons = 6,
}: PaginationProps) {
	const [currentPage] = useState(1)
	const totalPagesPre = Math.ceil(
		(totalElements - (resultsPerPage - 1)) / resultsPerPage,
	)
	const totalPages =
		totalElements % resultsPerPage === 0 ? totalPagesPre : totalPagesPre + 1

	useEffect(() => {
		setActivePage(currentPage)
	}, [currentPage, setActivePage])

	const handleClick = useCallback(
		(newPage: number | false) => {
			if (newPage) {
				setActivePage(newPage)

				gsap.to(window, {
					duration: 0,
					scrollTo: { y: `#${scrollTarget}`, offsetY: 300 },
				})
			}
		},
		[setActivePage, scrollTarget],
	)

	const pagination = useMemo(() => {
		const renderFirstPageNumbers = (num: number) => {
			const firstPageNumbers = []
			for (let i = 2; i <= num; i++) {
				firstPageNumbers.push(
					<PageNumber
						key={i}
						type="button"
						$active={activePage === i}
						onClick={() => handleClick(i)}
					>
						{addZero(i)}
					</PageNumber>,
				)
			}
			return firstPageNumbers
		}

		const renderMiddleNumbers = () => {
			const minimumMiddle = 2
			const fromButtons = numberOfButtons - 3
			const buttonAmount =
				fromButtons > minimumMiddle ? fromButtons : minimumMiddle

			const pageButtons = []
			for (let i = 0; i < buttonAmount; i++) {
				pageButtons.push(
					<PageNumber
						key={i}
						type="button"
						$active={i === 0}
						onClick={() => handleClick(activePage + i)}
					>
						{addZero(activePage + i)}
					</PageNumber>,
				)
			}
			return pageButtons
		}

		const renderLastNumbers = (Page_Numbers: number) => {
			const pageButtons = []
			for (let i = 0; i < Page_Numbers; i++) {
				const pageNumber = totalPages - Page_Numbers + i
				pageButtons.push(
					<PageNumber
						key={pageNumber}
						type="button"
						$active={activePage === pageNumber}
						onClick={() => handleClick(pageNumber)}
					>
						{addZero(pageNumber)}
					</PageNumber>,
				)
			}
			return pageButtons
		}

		return (
			<>
				<PageNumber
					type="button"
					onClick={() => {
						handleClick(1)
					}}
					$active={activePage === 1}
				>
					01
				</PageNumber>
				{activePage < numberOfButtons && (
					<>
						{renderFirstPageNumbers(numberOfButtons)}
						<PageNumber type="button">..</PageNumber>
					</>
				)}
				{activePage > numberOfButtons - 1 &&
					activePage < totalPages - (numberOfButtons - 2) && (
						<>
							<PageNumber type="button">..</PageNumber>
							{renderMiddleNumbers()}
							<PageNumber type="button">..</PageNumber>
						</>
					)}
				{activePage > numberOfButtons - 1 &&
					activePage > totalPages - (numberOfButtons - 1) && (
						<>
							<PageNumber type="button">..</PageNumber>
							{renderLastNumbers(numberOfButtons - 2)}
						</>
					)}

				<PageNumber
					type="button"
					onClick={() => handleClick(totalPages)}
					$active={activePage === totalPages}
				>
					{addZero(totalPages)}
				</PageNumber>
			</>
		)
	}, [activePage, handleClick, numberOfButtons, totalPages])

	return (
		<Wrapper>
			<ArrowButton
				flipped
				disabled={totalPages === 1 || activePage === 1}
				onClick={() => handleClick(activePage > 1 ? activePage - 1 : 1)}
			>
				&nbsp;
			</ArrowButton>
			<PageNumbers>
				{totalPages <= numberOfButtons + 1
					? Array.from({ length: totalPages }, (_value, i) => {
							const num = i
							return (
								<PageNumber
									type="button"
									key={`page-${num}`}
									onClick={() => handleClick(i + 1)}
									$active={activePage === i + 1}
								>
									{addZero(i + 1)}
								</PageNumber>
							)
						})
					: pagination}
			</PageNumbers>

			<ArrowButton
				disabled={activePage === totalPages}
				onClick={() => handleClick(activePage !== totalPages && activePage + 1)}
			>
				&nbsp;
			</ArrowButton>
		</Wrapper>
	)
}

const PageNumber = styled(UniversalLink)<{ $active?: boolean }>`
	line-height: 100%;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	color: ${({ $active }) => ($active ? colors.black : colors.grey03)};
	border-radius: 100%;
	transition: 0.4s;
	background: transparent;

	${textStyles.kick};
	${media.hover} {
		:hover {
			transition: 0.4s;
		}
	}

	:active {
		color: ${colors.black};
		transition: 0.4s;
	}

	border: 1px solid ${({ $active }) => ($active ? colors.black : colors.grey03)};
	${fresponsive(css`
		width: 24px;
		height: 24px;
		border-radius: 4px;
	`)};

	${ftablet(css`
		${textStyles.kicker4};
		width: 32px;
		height: 32px;
		border-radius: 4px;
	`)};

	${fmobile(css`
		width: 24px;
		height: 24px;
	`)};
`

const Wrapper = styled.div`
	position: relative;
	z-index: 3;
	justify-content: center;
	align-items: center;
	display: flex;
	width: 100%;
	${fresponsive(css`
		gap: 2px;
	`)};
`

const PageNumbers = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	${fresponsive(css`
		gap: 12px;
	`)};
`
