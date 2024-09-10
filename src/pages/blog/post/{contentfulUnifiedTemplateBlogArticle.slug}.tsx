import { Author } from "components/blog/Author"
import { type PageProps, graphql } from "gatsby"
import RichText from "library/RichText"
import UniversalImage from "library/UniversalImage"
import styled from "styled-components"

export default function TemplateArticle({
	data,
}: PageProps<Queries.TemplateArticleQuery>) {
	const post = data.contentfulUnifiedTemplateBlogArticle
	if (!post) return null

	return (
		<Wrapper>
			<h1>{post.title}</h1>
			<UniversalImage
				image={post.mainImage?.gatsbyImageData}
				alt={post.mainImage?.description ?? ""}
			/>
			<Author />
			<div>
				categories:
				{post.categories?.map((category) => (
					<div key={category}>{category}</div>
				))}
			</div>
			<RichText content={post.articleText} />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	max-width: 1024px;
	margin: 0 auto;
`

export const query = graphql`
	query TemplateArticle($id: String) {
		contentfulUnifiedTemplateBlogArticle(id: { eq: $id }) {
			id
			title
			slug
			categories
			mainImage {
				gatsbyImageData
				description
			}
			articleText {
				raw
				references {
					... on ContentfulAsset {
						contentful_id
						__typename
						gatsbyImageData
						file {
							url
							fileName
						}
					}
					... on ContentfulUnifiedComponentCallToAction {
						contentful_id
						__typename
						paragraphText {
							paragraphText
						}
						title
					}
					... on ContentfulUnifiedComponentQuoteCard {
						contentful_id
						__typename
						attribution
						quotation {
							quotation
						}
					}
					... on ContentfulUnifiedComponentYoutubeVideo {
						contentful_id
						__typename
						title
						youtubeLink
					}
				}
			}
			author {
				fullName
				roleAndCompany
				photo {
					gatsbyImageData
				}
			}
		}
		allContentfulUnifiedTemplateBlogArticle(
			sort: { createdAt: DESC }
			filter: { id: { nin: [$id] } }
			limit: 3
		) {
			nodes {
				id
				title
				slug
			}
		}
	}
`
