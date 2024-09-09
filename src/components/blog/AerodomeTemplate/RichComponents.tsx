import type { Options } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"
import type { IGatsbyImageData } from "gatsby-plugin-image"
import { ReactComponent as QuoteIcon } from "images/blog/AerodomeTemplate/quoteIcon.svg"
import ArrowIcon from "images/global/arrow.svg"
import UniversalLink from "library/Loader/UniversalLink"
import renderContent from "library/RichText/renderContent"
import UniversalImage from "library/UniversalImage"
import { fmobile, fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import data from "styles/blog/data"
import WhitePaper from "./WhitePaper"

const textStyles = data.projectTextStyles
const colors = data.projectColors

const Strong = styled.strong`
	font-weight: 700;
`

const U = styled.u`
	text-decoration: underline;
`

const Em = styled.em`
	font-style: italic;
`

const Code = styled.pre`
	margin: 0;
	${textStyles.body1}
	font-family: monospace;
`

const Sub = styled.sub`
	vertical-align: sub;
`

const Sup = styled.sup`
	vertical-align: super;
`

export const H1 = styled.h1`
	${textStyles.blogH1}

	${fmobile(css`
		${textStyles.blogH2}
	`)}
`

const H2 = styled.h2`
	${textStyles.blogH2}

	${fmobile(css`
		${textStyles.blogH3}
	`)}
`

const H3 = styled.h2`
	${textStyles.blogH4}
`

const P = styled.p`
	${textStyles.bodyR}
	color: ${colors.black};
`

const Ul = styled.ul`
	padding-inline-start: 2.3ch;
	list-style-image: url(${ArrowIcon});

	${fresponsive(css`
		display: grid;
		gap: 24px;

		::marker {
			font-size: 25px;
		}

		p {
			margin-left: 5px;
		}
	`)}

	${fmobile(css`
		padding-inline-start: 1.3ch;
		display: grid;
		gap: 0;
	`)}
`

const Ol = styled.ol`
	list-style-type: numeric;
	padding-inline-start: 2.3ch;

	li {
		:nth-child(2) {
			list-style-type: upper-latin;
		}

		ol {
			gap: 0;
		}

		li {
			p {
				margin-top: 6px;
			}

			:nth-child(2) {
				list-style-type: lower-roman;
			}

			li {
				:nth-child(2) {
					list-style-type: lower-latin;
				}

				li {
					:nth-child(2) {
						list-style-type: numeric;
					}
				}
			}
		}
	}

	${fresponsive(css`
		display: grid;
		gap: 18px;
	`)}

	${fmobile(css`
		padding-inline-start: 2ch;
		display: grid;
		gap: 5px;
	`)}
`

const Li = styled.li`
	${textStyles.body2}
`

const Hr = styled.hr`
	border-bottom: 1px solid ${colors.grey02};
`

const A = styled(UniversalLink)`
	color: ${colors.blue01};
`

/**
 * Typescript over-narrows typeof object
 */
const isObject = (
	obj: unknown,
): obj is Record<string | number | symbol, unknown> => {
	return typeof obj === "object" && obj !== null && !Array.isArray(obj)
}

const isGatsbyImageData = (obj: unknown): obj is IGatsbyImageData => {
	return isObject(obj) && "images" in obj
}

const options: Options = {
	renderMark: {
		[MARKS.BOLD]: (children) => <Strong>{children}</Strong>,
		[MARKS.UNDERLINE]: (children) => <U>{children}</U>,
		[MARKS.ITALIC]: (children) => <Em>{children}</Em>,
		[MARKS.CODE]: (children) => <Code>{children}</Code>,
		[MARKS.SUBSCRIPT]: (children) => <Sub>{children}</Sub>,
		[MARKS.SUPERSCRIPT]: (children) => <Sup>{children}</Sup>,
	},
	renderNode: {
		[BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
		[BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
		[BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
		[BLOCKS.PARAGRAPH]: (node, children) => <P>{children}</P>,
		[BLOCKS.UL_LIST]: (node, children) => <Ul>{children}</Ul>,
		[BLOCKS.OL_LIST]: (node, children) => <Ol>{children}</Ol>,
		[BLOCKS.LIST_ITEM]: (node, children) => <Li>{children}</Li>,
		[BLOCKS.QUOTE]: (node, children) => {
			const child = Array.isArray(children) ? children[0] : undefined
			const text = child.props.children[0]
			return (
				<Quote>
					<QuoteIcon />
					<div>{text}</div>
				</Quote>
			)
		},
		[BLOCKS.HR]: () => <Hr />,
		[INLINES.HYPERLINK]: (node, children) => {
			const { data } = node
			const { uri } = data
			// check if internal link
			if (typeof uri === "string") {
				return <A to={uri}>{children}</A>
			}
		},
		// images
		[BLOCKS.EMBEDDED_ASSET]: (node) => {
			const { data } = node
			const target = data.target as unknown
			if (
				isObject(target) &&
				"gatsbyImageData" in target &&
				isGatsbyImageData(target.gatsbyImageData) &&
				"description" in target &&
				typeof target.description === "string"
			)
				return (
					<Image
						image={target.gatsbyImageData}
						alt={target.description}
						imgStyle={{ width: "100%", margin: "0 auto", height: "auto" }}
					/>
				)

			return <span>Invalid Image</span>
		},
		[BLOCKS.EMBEDDED_ENTRY]: (node) => {
			const { data } = node
			const target = data.target
			if ("__typename" in target) {
				const { __typename } = target
				if (__typename === "ContentfulCustomQuote") {
					const { quoteText, quoteAuthor } = target
					return (
						<Quote>
							<QuoteIcon />
							<div>{quoteText?.quoteText}</div>
							<Quotee>{quoteAuthor}</Quotee>
						</Quote>
					)
				}

				if (__typename === "ContentfulWhitepaperDownload") {
					return <WhitePaper whitePaperInfo={target} />
				}
				if (__typename === "ContentfulYoutubeEmbed") {
					return (
						<VideoIframe
							loading="lazy"
							className="video-iframe"
							width="100%"
							height="100%"
							src={`https://www.youtube.com/embed/${target.youtubeId}`}
							title={target.title}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
							allowFullScreen={true}
						/>
					)
				}
			}
		},
	},
}

interface RichTextProps {
	content?: {
		raw?: string | null
		references?: unknown
	} | null
}

export default function RichText({ content }: RichTextProps) {
	return <Wrapper>{renderContent(content, options)}</Wrapper>
}

const Wrapper = styled.div`
	${fresponsive(css`
		display: grid;
		gap: 40px;
	`)}
`

const Quote = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: ${colors.black};
	color: ${colors.white};

	${textStyles.blogQuote};
	${fresponsive(css`
		border-radius: 24px;
		padding: 32px;
		gap: 26px;
	`)}

	svg {
		width: 24px;
		height: 24px;
	}
`

const Quotee = styled.span`
	${textStyles.kicker3};
	color: ${colors.grey04};
`

const VideoIframe = styled.iframe`
	position: relative;
	object-fit: cover;
	border: none;
	border-radius: 8px;
	width: 100%;
	height: 100%;
	object-position: center;

	${fresponsive(css`
		width: 100%;
		height: 548px;
	`)}

	${fmobile(css`
		width: 100%;
		height: 193px;
	`)}
`

const Image = styled(UniversalImage)`
	${fresponsive(css`
		border-radius: 24px;

		img {
			border-radius: 24px;
		}
	`)}
`
