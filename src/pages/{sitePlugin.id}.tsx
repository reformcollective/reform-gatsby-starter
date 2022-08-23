import React from "react"

import { graphql, PageProps } from "gatsby"

import InternalLink from "components/InternalLink"
import Layout from "components/Layout"
import SEO from "components/Seo"

export default function TemplateSample(
  pageContext: PageProps<Queries.SitePluginTemplateQuery>
) {
  return (
    <Layout>
      <h1>Hello from a template Page</h1>
      {JSON.stringify(pageContext)}
      <InternalLink to="/">Go back to the homepage</InternalLink>
    </Layout>
  )
}

export function Head() {
  return (
    <SEO
      title="Template Page"
      description="This template page is an example"
      pathname="template-page-id"
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
