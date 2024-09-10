import UniversalLink from "library/Loader/UniversalLink"
import UniversalImage, { type UniversalImageData } from "library/UniversalImage"
import styled from "styled-components"

type Nullish = null | undefined

export type AuthorInfo =
	| {
			fullName: string | Nullish
			roleAndCompany: string | Nullish
			photo: { gatsbyImageData: UniversalImageData } | Nullish
			slug: string | Nullish
	  }
	| Nullish

export function Author({ author }: { author: AuthorInfo }) {
	if (!author) return null
	return (
		<UniversalLink to={`/blog/author/${author.slug}`}>
			<Image
				image={author?.photo?.gatsbyImageData}
				alt={author?.fullName ?? ""}
			/>
			{author?.fullName}
			<br />
			{author?.roleAndCompany}
		</UniversalLink>
	)
}

const Image = styled(UniversalImage)`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	float: left;
`
