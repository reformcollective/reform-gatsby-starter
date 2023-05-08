import { graphql, useStaticQuery } from "gatsby"

interface SEOProps {
  title: string | null | undefined
  description: string | null | undefined
  pathname: string
  creator?: string
  image?: string
}

export default function Seo({
  title,
  description,
  pathname,
  creator = "",
  image,
}: SEOProps) {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl,
  } = useSiteMetadata() ?? {}

  const seo = {
    title: title ?? defaultTitle,
    description: description ?? defaultDescription,
    image: image ?? defaultImage,
    url: `${siteUrl ?? ""}${pathname}`,
    creator,
  }

  return (
    <>
      {/* basic head elements */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description ?? ""} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimal-ui"
      />

      {/* twitter seo */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={seo.creator} />
      <meta name="twitter:title" content={seo.title ?? ""} />
      <meta name="twitter:description" content={seo.description ?? ""} />
      <meta name="twitter:image" content={seo.image ?? ""} />

      {/* og seo */}
      <meta property="og:title" content={seo.title ?? ""} />
      <meta property="og:description" content={seo.description ?? ""} />
      <meta property="og:image" content={seo.image ?? ""} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
    </>
  )
}

export const useSiteMetadata = () => {
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

  return data.site?.siteMetadata
}
