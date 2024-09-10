import { DisplayDate } from "library/DisplayDate"
import UniversalLink from "library/Loader/UniversalLink"
import UniversalImage, { type UniversalImageData } from "library/UniversalImage"
import styled from "styled-components"
import { Author, type AuthorInfo } from "./Author"

type Nullish = null | undefined

export function LargeCard({
	published,
	slug,
	title,
	image,
	preview,
	author,
}: {
	slug: string | Nullish
	title: string | Nullish
	preview: string | Nullish
	published: string | number | Nullish
	image:
		| {
				gatsbyImageData: UniversalImageData | Nullish
				description: string | Nullish
		  }
		| Nullish
	author: AuthorInfo
}) {
	return (
		<Wrapper ariaLabel={title ?? "blog post"} to={`/blog/${slug}`}>
			<Author author={author} />
			{published && <DisplayDate date={published} />}
			{image && (
				<UniversalImage
					image={image.gatsbyImageData}
					alt={image.description ?? ""}
				/>
			)}
			<h1>{title}</h1>
			<p>{preview}</p>
		</Wrapper>
	)
}

const Wrapper = styled(UniversalLink)`
	border: 1px solid orange;
	display: grid;
`
