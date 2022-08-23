import React from "react"

import InternalLink from "components/InternalLink"
import Layout from "components/Layout"
import SEO from "components/Seo"

export default function TemplateSample() {
  return (
    <Layout>
      <h1>Hello from a template Page</h1>
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
