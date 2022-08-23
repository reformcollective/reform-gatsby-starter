import React from "react"

import Layout from "components/Layout"
import SEO from "components/Seo"

export default function FourOhFour() {
  return (
    <Layout>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export function Head() {
  return (
    <SEO
      title="404: Not Found"
      description="This page could not be found."
      pathname="404"
    />
  )
}
