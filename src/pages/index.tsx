import React from "react"

import { graphql, PageProps } from "gatsby"

import InternalLink from "components/InternalLink"
import Layout from "components/Layout"
import SEO from "components/Seo"

export default function IndexPage(
  pageContext: PageProps<Queries.SitePluginsHomeQuery>
) {
  const { data } = pageContext
  const { edges } = data.allSitePlugin

  return (
    <Layout>
      <p>
        <InternalLink to="/page-2/">Go to page 2</InternalLink> <br />
        <br />
      </p>
      {edges.map(({ node }) => (
        <InternalLink to={`/${node.id}`} key={node.id}>
          {node.name}
        </InternalLink>
      ))}
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
      <h1>Hi people</h1>
    </Layout>
  )
}

export function Head() {
  return <SEO title="Home" description="This is the homepage!" pathname="" />
}

export const query = graphql`
  query SitePluginsHome {
    allSitePlugin {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`
