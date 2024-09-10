import Seo from "components/Seo"
import { SmallCard } from "components/blog/SmallCard"
import { type HeadProps, type PageProps, graphql } from "gatsby"
import UniversalImage from "library/UniversalImage"
import styled from "styled-components"

export default function TemplateAuthor({
	data,
}: PageProps<Queries.TemplateAuthorQuery>) {
	const author = data.contentfulUnifiedComponentAuthor

	if (!author) throw new Error("author not found")

	return (
		<Wrapper>
			<ProfilePhoto
				image={author.photo?.gatsbyImageData}
				alt={author.fullName ?? ""}
			/>
			<h1>{author.fullName}</h1>
			<div>{author.roleAndCompany}</div>
			<div>{author.biography?.biography}</div>
			<Grid>
				{author.unified_template___blog_article
					?.filter((x) => x !== null)
					.map((article) => (
						<SmallCard
							image={article.mainImage}
							preview={article.fields?.textPreview}
							published={article.fields?.calculatedDate}
							slug={article.slug}
							title={article.title}
							key={article.id}
							author={null}
						/>
					))}
			</Grid>
		</Wrapper>
	)
}

export const Head = ({
	data,
	location,
}: HeadProps<Queries.TemplateAuthorQuery>) => {
	return (
		<Seo
			title={data.contentfulUnifiedComponentAuthor?.fullName}
			description={data.contentfulUnifiedComponentAuthor?.biography?.biography}
			gatsbyPathname={location.pathname}
		/>
	)
}

const Wrapper = styled.div`
	max-width: 1024px;
	margin: 0 auto;
`

const ProfilePhoto = styled(UniversalImage)`
	width: 100px;
	height: 100px;
	border-radius: 50%;
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

export const query = graphql`
	query TemplateAuthor($id: String) {
		contentfulUnifiedComponentAuthor(id: { eq: $id }) {
			id
			fullName
			slug
			photo {
				gatsbyImageData
			}
			roleAndCompany
			biography {
				biography
			}
			unified_template___blog_article {
				id
				slug
				fields {
					calculatedDate
					textPreview
				}
				title
				mainImage {
					gatsbyImageData
					description
				}
			}
		}
	}
`
