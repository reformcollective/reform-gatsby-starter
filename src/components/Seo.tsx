import { graphql, useStaticQuery } from "gatsby"

interface SEOProps {
	/**
	 * provide the title of this page
	 */
	title: string | null | undefined
	/**
	 * provide the description that will be used in search engines
	 */
	description: string | null | undefined
	/**
	 * provide the pathname of this page (e.g. /page/example or /blog)
	 * this will be used to generate this page's url
	 */
	pathname: `/${string}`
	/**
	 * if applicable, provide the full URL of an OG image to be used in social media
	 * this must be a complete URL
	 * (e.g. https://example.com/image.jpg)
	 */
	image?: string
	/**
	 * if applicable, provide the twitter creator's handle
	 */
	creator?: string
}

export default function Seo({
	title,
	description,
	pathname,
	image,
	creator,
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
		title: title ?? defaultTitle,
		description: description ?? defaultDescription,
		image: image ?? defaultImage,
		url: `${siteUrl}${pathname}`,
		creator,
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
			<meta name="twitter:creator" content={seo.creator} />
			<meta name="twitter:title" content={seo.title ?? ""} />
			<meta name="twitter:description" content={seo.description ?? ""} />
			<meta name="twitter:image" content={seo.image ?? ""} />
			{/* <meta
				name="twitter:image"
				content="https://images.ctfassets.net/8snrabcmat5j/4DfsHfNHyyzzjhVVPgDCQj/14c9d01590a6cf6db649f6750a4a49d6/tax-fraud-2.jpeg?w=600&h=300&fl=progressive&q=90&fm=jpg"
			/> */}
			{/* <meta name="twitter:image:width" content="1200" />
			<meta name="twitter:image:height" content="630" /> */}

			{/* og seo */}
			<meta property="og:title" content={seo.title ?? ""} />
			<meta property="og:description" content={seo.description ?? ""} />
			<meta property="og:image" content={seo.image ?? ""} />
			<meta property="og:url" content={seo.url} />
			<meta property="og:type" content="website" />
		</>
	)
}
