import Seo from "components/Seo"
import { useNavConfig } from "components/blog/AerodomeTemplate/Providers/MenuColor"
import type { PageProps } from "gatsby"
import { graphql } from "gatsby"
import { ReactComponent as LinkedinSVG } from "images/global/linkedin.svg"
import { ReactComponent as TwitterSVG } from "images/global/twitter.svg"
import UniversalLink from "library/Loader/UniversalLink"
import UniversalImage from "library/UniversalImage"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import BlogAuthorLayout from "sections/blog/AerodomeTemplate/BlogAuthorLayout"
// import Contact from "sections/home/07-Contact"
import styled, { css } from "styled-components"
import data from "styles/blog/data"

const textStyles = data.projectTextStyles
const colors = data.projectColors

export default function BlogAuthorPage({
	data,
	contactSection,
}: {
	data: PageProps<Queries.BlogAuthorQuery>
	contactSection: JSX.Element
}) {
	useNavConfig({ menuDark: false, paused: true })

	const { contentfulBlogAuthor: author } = data
	const { image, name, roleAndCompany, shortBio, linkedinUrl, xUrl } =
		author ?? {}

	return (
		<Wrapper>
			<AuthorInfo>
				<Left>
					<AuthorImage
						image={image?.gatsbyImageData}
						alt={image?.description ?? "headshot"}
					/>
					<NameAndJob>
						<Name>{name}</Name>
						<Job>{roleAndCompany}</Job>
					</NameAndJob>
				</Left>

				<Right>
					<Row>
						{linkedinUrl && (
							<SocialLink to={linkedinUrl}>
								<Linkedin />
							</SocialLink>
						)}

						{xUrl && (
							<SocialLink to={xUrl}>
								<Twitter />
							</SocialLink>
						)}
					</Row>
					<Bio>{shortBio}</Bio>
				</Right>
			</AuthorInfo>
			<BlogAuthorLayout data={data} />
			{/* <Contact /> */}
			{contactSection}
		</Wrapper>
	)
}

export function Head({ data }: PageProps<Queries.BlogAuthorQuery>) {
	return (
		<Seo
			title={data.contentfulBlogAuthor?.name}
			description={data.contentfulBlogAuthor?.shortBio}
			image={data.contentfulBlogAuthor?.image?.file?.url ?? ""}
			pathname={`/blog/${data.contentfulBlogAuthor?.slug ?? ""}`}
		/>
	)
}

const Wrapper = styled.div`
	width: 100vw;
	display: grid;
	place-items: center;

	${fresponsive(css`
		padding-top: 80px;
	`)}

	${ftablet(css`
		width: 1024px;
	`)}

	${fmobile(css`
		padding-top: 40px;
		width: 375px;
	`)}
`

const AuthorInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	border-bottom: 1px solid ${colors.grey02};

	${fresponsive(css`
		width: 1360px;
		padding-bottom: 80px;
	`)}

	${ftablet(css`
		width: 944px;
	`)}

  ${fmobile(css`
		width: 343px;
		padding-bottom: 48px;
		flex-direction: column;
		gap: 24px;
	`)}
`

const Left = styled.div`
	display: flex;
	align-items: center;

	${fresponsive(css`
		gap: 24px;
	`)}

	${fmobile(css`
		gap: 16px;
		width: 100%;
	`)}
`

const AuthorImage = styled(UniversalImage)`
	${fresponsive(css`
		width: 150px;
		height: 150px;
		border-radius: 16px;
	`)}

	background-size: cover;
	background-position: center;

	${fmobile(css`
		width: 64px;
		height: 64px;
	`)}
`

const NameAndJob = styled.div`
	display: flex;
	flex-direction: column;
	${fresponsive(css`
		gap: 20px;
	`)}

	${ftablet(css`
		max-width: 400px;
	`)}

	${fmobile(css`
		gap: 12px;
	`)}
`

const Name = styled.div`
	${textStyles.h3};
	color: ${colors.black};
	${ftablet(css`
		${textStyles.h6};
	`)}

	${fmobile(css`
		${textStyles.h8};
	`)}
`

const Job = styled.div`
	${textStyles.kicker3};
	color: ${colors.grey03};

	${fmobile(css`
		${textStyles.kicker4};
	`)}
`

const Right = styled.div`
	display: flex;
	flex-direction: column;

	${fresponsive(css`
		width: 274px;
	`)}

	${fmobile(css`
		width: 100%;
		flex-direction: column-reverse;
		gap: 24px;
	`)}
`

const Row = styled.div`
	display: flex;

	${fresponsive(css`
		gap: 12px;
		margin-bottom: 24px;
	`)}

	${fmobile(css`
		gap: 16px;
		margin-bottom: 0;
	`)}
`

const Linkedin = styled(LinkedinSVG)`
	${fresponsive(css`
		width: 24px;
		height: 24px;
	`)}
`

const Twitter = styled(TwitterSVG)`
	${fresponsive(css`
		width: 24px;
		height: 24px;
	`)}
`

const Bio = styled.div`
	${textStyles.body3};
	color: ${colors.black};
`

const SocialLink = styled(UniversalLink)`
	svg {
		path {
			fill: ${colors.black};
			transition: all 0.3s ease-in-out;
		}
	}

	&:hover {
		svg {
			path {
				transition: all 0.3s ease-in-out;
				fill: ${colors.grey04};
			}
		}
	}

	&:active {
		svg {
			path {
				transition: all 0.3s ease-in-out;
				fill: ${colors.grey03};
			}
		}
	}
`

export const query = graphql`
	query BlogAuthor($id: String) {
		contentfulBlogAuthor(id: { eq: $id }) {
			image {
				gatsbyImageData
				description
				file {
					url
				}
			}
			contentful_id
			id
			slug
			roleAndCompany
			name
			shortBio
			linkedinUrl
			xUrl
		}
		allContentfulBlogPost(
			sort: { createdAt: DESC }
			filter: {
				id: { ne: "0e9776cc-031e-5ded-a4ff-00db04c1d46a" }
				blogAuthor: { id: { eq: $id } }
			}
		) {
			distinct(field: { category: SELECT })
			nodes {
				blogAuthor {
					name
					slug
				}
				category
				blogArticle {
					raw
				}
				updatedAt(formatString: "MMMM DD, YYYY")
				createdAt(formatString: "MMMM DD, YYYY")
				contentful_id
				mainBlogImage {
					gatsbyImageData
				}
				manualPublishDate(formatString: "MMMM DD, YYYY")
				summary
				id
				title
				slug
			}
		}
	}
`
