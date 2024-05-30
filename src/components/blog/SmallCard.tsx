import UniversalLink from "library/Loader/UniversalLink"
import UniversalImage from "library/UniversalImage"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import { blogConfig as data } from "pages/blog/data"
import styled, { css } from "styled-components"
import { clampText, trim } from "styles/text"
import type { BlogCard } from "types/alias"
import Author from "./Author"

const textStyles = data.projectTextStyles

export default function SmallCard({ data }: { data: BlogCard }) {
	const { slug, author, mainImage, title } = data

	return (
		<Wrapper to={`/blog/${slug}`}>
			<Image
				image={mainImage?.gatsbyImageData}
				alt={mainImage?.description ?? ""}
			/>
			<Title>{title}</Title>
			{author && <Author data={author} />}
		</Wrapper>
	)
}

const Wrapper = styled(UniversalLink)`
  width: 100%;
  
  ${fresponsive(css`
    display: grid;
    gap: 12px;
  `)}
`

const Image = styled(UniversalImage)`
  width: 100%;

  ${fresponsive(css`
    aspect-ratio: 372 / 215;
    border-radius: 18px;
  `)}

  ${ftablet(css`
    aspect-ratio: 268 / 215;
  `)}
  
  ${fmobile(css`
    aspect-ratio: 273 / 215;
  `)}
`

const Title = styled.div`
  ${trim(1.2)}
  ${clampText(2)}
  ${textStyles.sh1};

  ${fresponsive(css`
    padding: 4px 0;
    margin: -4px 0;
  `)}

  ${fmobile(css`
    ${textStyles.sh2}
  `)}
`
