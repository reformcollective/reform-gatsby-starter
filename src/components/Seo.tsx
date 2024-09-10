import { graphql, useStaticQuery } from "gatsby"

type Nullish = null | undefined

interface SEOProps {
	/**
	 * provide the title of this page
	 */
	title: string | Nullish
	/**
	 * provide the description that will be used when shared on social media and by some search engines
	 */
	description: string | Nullish
	/**
	 * provide the pathname of this page (e.g. /page/example or /blog)
	 * this will be used to generate this page's url
	 *
	 * accessible at location.pathname from gatsby head props
	 */
	gatsbyPathname: string
	/**
	 * if applicable, provide the full URL of an OG image to be used in social media
	 * this must be a complete URL
	 * (e.g. https://example.com/image.jpg)
	 */
	image?: string | Nullish
}

export default function Seo({
	title,
	description,
	gatsbyPathname: pathname,
	image,
}: SEOProps) {
	const data: Queries.SeoQuery = useStaticQuery(graphql`
		query Seo {
			site {
				siteMetadata {
					title
					description
					image
					siteUrl
				}
			}
		}
	`)

	const {
		title: defaultTitle,
		description: defaultDescription,
		image: defaultImage,
		siteUrl,
	} = data.site?.siteMetadata ?? {}

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: image || defaultImage,
		url: `${siteUrl}${pathname}`,
	}

	return (
		<>
			{/* basic head elements */}
			<title>{seo.title}</title>
			<meta name="description" content={seo.description ?? ""} />
			<meta
				name="viewport"
				content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
			/>

			{/* twitter seo */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={seo.title ?? ""} />
			<meta name="twitter:description" content={seo.description ?? ""} />
			<meta name="twitter:image" content={seo.image ?? ""} />

			{/* og seo */}
			<meta property="og:title" content={seo.title ?? ""} />
			<meta property="og:description" content={seo.description ?? ""} />
			<meta property="og:image" content={seo.image ?? ""} />
			<meta property="og:url" content={seo.url} />
			<meta property="og:type" content="website" />
			{defaultTitle && <meta property="og:site_name" content={defaultTitle} />}
		</>
	)
}
