import React from "react"

import { graphql, HeadProps, PageProps } from "gatsby"

import Layout from "components/Layout"
import SEO from "components/Seo"
import { TransitionLink } from "components/TransitionLink"
import { Filler } from "pages"

/**
 * as an example, this template page generates a page for each plugin
 * for reference see https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/
 */
export default function TemplateSample({
  data,
}: PageProps<Queries.SitePluginTemplateQuery>) {
  return (
    <Layout>
      <Filler>
        <h1>Hello from the {data.sitePlugin?.name} page</h1>
        <br />
        <TransitionLink transition="fade" to="/">
          Go back to the homepage
        </TransitionLink>
      </Filler>
      <Filler>
        <h1>This page is entirely dedicated to {data.sitePlugin?.name}</h1>
      </Filler>
      <Filler>
        <h1>If you don&apos;t like {data.sitePlugin?.name} I will fight you</h1>
      </Filler>
    </Layout>
  )
}

export function Head({ data }: HeadProps<Queries.SitePluginTemplateQuery>) {
  return (
    <SEO
      title={`${data.sitePlugin?.name} example`}
      description="This template page is an example"
      pathname={data.sitePlugin?.id}
    />
  )
}

export const query = graphql`
  query SitePluginTemplate($id: String) {
    sitePlugin(id: { eq: $id }) {
      id
      name
    }
  }
`
