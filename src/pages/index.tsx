import React from "react"

import { graphql, PageProps } from "gatsby"
import styled from "styled-components"

import InternalLink from "components/InternalLink"
import Layout from "components/Layout"
import SEO from "components/Seo"
import textStyles from "styles/text"

export default function IndexPage({
  data,
}: PageProps<Queries.SitePluginsHomeQuery>) {
  const { edges: pluginList } = data.allSitePlugin

  return (
    <Layout>
      <Filler>
        <h1>Welcome to Your Gatsby Site</h1>
        <br />
        <InternalLink to="/page-2/">Go to page 2</InternalLink>
      </Filler>
      <Filler>
        <h1>Please enjoy the following template pages:</h1> <br />
        {pluginList.map(({ node }) => (
          <>
            <InternalLink to={`/${node.id}`} key={node.id}>
              {node.name}
            </InternalLink>
            <br />
          </>
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

export const Filler = styled.div`
  ${textStyles.h1};
  min-height: 70vh;
  border-radius: 10px;
  background-color: #f0f0f0;
  margin: 100px;
  padding: 100px;
  text-align: center;
`
