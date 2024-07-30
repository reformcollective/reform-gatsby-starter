import { loadPage } from "library/Loader/TransitionUtils"
import UniversalImage from "library/UniversalImage"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import type { ReactNode } from "react"
import styled, { css } from "styled-components"
import data from "styles/blog/data"
import { clampText, trim } from "styles/text"
import type { BlogCard } from "types/alias"
import Author from "./Author"

const textStyles = data.projectTextStyles
const colors = data.projectColors

export default function LargeCard({
	data,
	button,
}: {
	data: BlogCard
	button?: ReactNode
}) {
	const { author, mainImage, title, articleTextPreview, slug } = data

	return (
		<Wrapper
			role="presentation"
			onClick={() => {
				loadPage(`/blog/${slug}`, "fade").catch(console.error)
			}}
		>
			<Image
				image={mainImage?.gatsbyImageData}
				alt={mainImage?.description ?? ""}
			/>
			<Title>{title}</Title>
			<Details>
				<Description>{articleTextPreview}</Description>
				{author && <Author data={author} />}
			</Details>
			{button ? (
				button
			) : (
				<PlaceholderButton>Continue Reading</PlaceholderButton>
			)}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	cursor: pointer;
	width: 100%;

	${fresponsive(css`
		gap: 26px;
		margin-bottom: 60px;
	`)}

	${ftablet(css`
		margin-bottom: 48px;
		gap: 20px;
	`)}

  ${fmobile(css`
		margin-top: 20px;
		padding-bottom: 50px;
		margin-bottom: 10px;
		border-bottom: 1px solid ${colors.neutral300};
		gap: 16px;
	`)}
`

const Image = styled(UniversalImage)`
	${fresponsive(css`
		width: 100%;
		aspect-ratio: 768 / 440;
		border-radius: 16px;
	`)}
	${ftablet(css`
		aspect-ratio: 585 / 440;
	`)}
  ${fmobile(css`
		aspect-ratio: 313 / 222;
	`)}
`

const Title = styled.div`
	${clampText(2)}
	${textStyles.h6};

	${fresponsive(css`
		padding-bottom: 4px;
	`)}

	${fresponsive(css`
		${textStyles.sh1}
	`)}
`

const Details = styled.div`
	${fresponsive(css`
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 16px 8px;
	`)}

	${ftablet(css`
		gap: 28px 10px;
		margin-bottom: 10px;
	`)}

  ${fmobile(css`
		gap: 16px;
	`)}
`

const Description = styled.div`
	${trim(1.25)}
	${clampText(2)}
  ${textStyles.bodyS};
	color: ${colors.neutral700};
	grid-column: span 2;

	${fresponsive(css`
		padding-bottom: 2px;
	`)}

	${ftablet(css`
		${textStyles.bodyR};
		${trim(1.2)};
		margin-top: 10px;
	`)}
  ${fmobile(css`
		${textStyles.bodyS};
		${trim(1.2)};
	`)}
`

export const PlaceholderButton = styled.button`
	${fresponsive(css`
		${textStyles.sh3};
		border: 1px solid ${colors.neutralBlack};
		border-radius: 8px;
		width: fit-content;
		cursor: pointer;
		padding: 4px 6px;
	`)}
`
