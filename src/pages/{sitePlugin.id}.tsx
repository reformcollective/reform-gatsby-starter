import React from "react"

import { graphql, HeadProps, PageProps } from "gatsby"

import InternalLink from "components/InternalLink"
import Layout from "components/Layout"
import SEO from "components/Seo"

export default function TemplateSample({
  data,
}: PageProps<Queries.SitePluginTemplateQuery>) {
  return (
    <Layout>
      <h1>Hello from the {data.sitePlugin?.name} page</h1>
      <InternalLink to="/">Go back to the homepage</InternalLink>
    </Layout>
  )
}

export function Head(props: HeadProps<Queries.SitePluginTemplateQuery>) {
  const { data } = props

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
