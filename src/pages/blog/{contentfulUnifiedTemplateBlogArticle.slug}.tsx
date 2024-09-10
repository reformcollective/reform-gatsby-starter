import Seo from "components/Seo"
import { Author } from "components/blog/Author"
import { SmallCard } from "components/blog/SmallCard"
import { type HeadProps, type PageProps, graphql } from "gatsby"
import UniversalLink from "library/Loader/UniversalLink"
import RichText from "library/RichText"
import UniversalImage from "library/UniversalImage"
import styled from "styled-components"

export default function TemplateArticle({
	data,
}: PageProps<Queries.TemplateArticleQuery>) {
	const post = data.contentfulUnifiedTemplateBlogArticle
	if (!post) return null

	const related = data.allContentfulUnifiedTemplateBlogArticle.nodes

	return (
		<Wrapper>
			<UniversalLink to="/blog">back to blog</UniversalLink>
			<h1>{post.title}</h1>
			<UniversalImage
				image={post.mainImage?.gatsbyImageData}
				alt={post.mainImage?.description ?? ""}
			/>
			<Author author={post.author} />
			<Categories>
				post categories:
				{post.categories?.map((category) => (
					<UniversalLink to={`/blog?category=${category}`} key={category}>
						{category}
					</UniversalLink>
				))}
			</Categories>
			<RichText content={post.articleText} />
			<Related>
				related articles:
				{related.length > 0 &&
					related.map((article) => (
						<SmallCard
							author={article.author}
							image={article.mainImage}
							preview={article.fields?.textPreview}
							published={article.fields?.calculatedDate}
							slug={article.slug}
							title={article.title}
							key={article.id}
						/>
					))}
			</Related>
		</Wrapper>
	)
}

export const Head = ({
	data,
	location,
}: HeadProps<Queries.TemplateArticleQuery>) => {
	return (
		<Seo
			title={data.contentfulUnifiedTemplateBlogArticle?.title}
			description={
				data.contentfulUnifiedTemplateBlogArticle?.metadataDescription
					?.metadataDescription
			}
			gatsbyPathname={location.pathname}
			image={
				data.contentfulUnifiedTemplateBlogArticleOgImage?.attributes?.publicURL
			}
		/>
	)
}

const Wrapper = styled.div`
	max-width: 1024px;
	margin: 0 auto;
`

const Categories = styled.div`
	border: 1px solid green;
	display: flex;
	gap: 8px;
`

const Related = styled.div`
	display: flex;
	gap: 8px;
`

export const query = graphql`
	query TemplateArticle($id: String) {
		contentfulUnifiedTemplateBlogArticleOgImage(parent: { id: { eq: $id } }) {
			attributes {
				publicURL
			}
		}
		contentfulUnifiedTemplateBlogArticle(id: { eq: $id }) {
			id
			title
			slug
			categories
			metadataDescription {
				metadataDescription
			}
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
				slug
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
				mainImage {
					gatsbyImageData
					description
				}
				fields {
					calculatedDate
					textPreview
				}
				author {
					fullName
					slug
					roleAndCompany
					photo {
						gatsbyImageData
					}
				}
			}
		}
	}
`
