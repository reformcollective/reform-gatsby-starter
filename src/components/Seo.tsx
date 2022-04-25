import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
export interface PageAttributes {
  title: string | undefined
  description: string
  lang?: string
  url?: string
  image?: string
}

type props = {
  pageAttributes: PageAttributes
}

const SEO: React.FC<props> = ({ pageAttributes: seo }) => {
  return (
    <div>
      SEO is not yet set up!
      <Helmet title={seo.title} />
    </div>
  )

  seo.lang = seo.lang ?? "en"
  const { description, lang, title, image, url } = seo

  // const { site } = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //           description
  //           image
  //           siteUrl
  //         }
  //       }
  //     }
  //   `
  // )

  // const metaDescription = description || site.siteMetadata.description
  // const currentTitle = title || site.siteMetadata?.title
  // const currentImage = image || site.siteMetadata?.image
  // const currentURL = url || site.siteMetadata?.siteUrl

  // return (
  //   <Helmet
  //     htmlAttributes={{
  //       lang,
  //     }}
  //     title={currentTitle}
  //     meta={[
  //       {
  //         name: `description`,
  //         content: metaDescription,
  //       },
  //       {
  //         property: `og:title`,
  //         content: currentTitle,
  //       },
  //       {
  //         property: "og:image",
  //         content: currentImage,
  //       },
  //       {
  //         property: `og:description`,
  //         content: metaDescription,
  //       },
  //       {
  //         property: `og:type`,
  //         content: `website`,
  //       },
  //       {
  //         property: `og:url`,
  //         content: currentURL,
  //       },
  //       {
  //         name: `twitter:card`,
  //         content: `summary`,
  //       },
  //       {
  //         name: `twitter:image`,
  //         content: currentImage,
  //       },
  //       {
  //         name: `twitter:creator`,
  //         content: ``,
  //       },
  //       {
  //         name: `twitter:title`,
  //         content: currentTitle,
  //       },
  //       {
  //         name: `twitter:description`,
  //         content: metaDescription,
  //       },
  //       {
  //         name: "viewport",
  //         content:
  //           "width=device-width, initial-scale=1, maximum-scale=1, minimal-ui",
  //       },
  //     ]}
  //   />
  // )
}

export default SEO
