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
	/**
	 * if applicable, provide the twitter site's handle
	 */
	site?: string
	/**
	 * provide the content type of the page
	 */
	type?: string
	/**
	 * if applicable, provide the alt text for the image
	 */
	imageAlt?: string
}

export default function Seo({
	title,
	description,
	pathname,
	image,
	creator,
	site,
	type,
	imageAlt,
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
		site,
		type,
		imageAlt,
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
			{/* <meta name="twitter:title" content={seo.title ?? ""} /> */}
			{/* <meta name="twitter:description" content={seo.description ?? ""} /> */}
			{/* <meta name="twitter:image" content={seo.image ?? ""} /> */}
			<meta name="twitter:site" content={seo.site} />

			{/* og seo */}
			<meta property="og:title" content={seo.title ?? ""} />
			<meta property="og:description" content={seo.description ?? ""} />
			<meta property="og:image" content={seo.image ?? ""} />
			<meta property="og:url" content={seo.url} />
			<meta property="og:type" content={seo.type} />
			<meta property="og:image:width" content="800" />
			<meta property="og:image:height" content="600" />
			<meta property="og:site_name" content="Thoughtly" />
			<meta property="og:image:alt" content={seo.imageAlt} />
		</>
	)
}
