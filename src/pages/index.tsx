import React from "react"

import { graphql, PageProps } from "gatsby"

import Layout from "components/Layout"
import SEO from "components/Seo"
import { TransitionLink } from "utils/TransitionUtils"

import { Filler } from "./404"

export default function IndexPage({
  data,
}: PageProps<Queries.SitePluginsHomeQuery>) {
  const { edges: pluginList } = data.allSitePlugin

  return (
    <Layout>
      <Filler>
        <h1>Welcome to Your Gatsby Site</h1>
        <br />
        <TransitionLink transition="fade" to="/page-2/">
          Fade to page 2
        </TransitionLink>
        <br />
        <TransitionLink transition="slide" to="/page-2/">
          Slide to page 2
        </TransitionLink>
        <br />
        <TransitionLink transition="blue" to="/page-2/">
          Blue Transition to page 2
        </TransitionLink>
      </Filler>
      <Filler>
        <h1>Please enjoy the following template pages:</h1> <br />
        {pluginList.map(({ node }) => (
          <TransitionLink transition="fade" to={`/${node.id}`} key={node.id}>
            {node.name}
            <br />
          </TransitionLink>
        ))}
      </Filler>
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
