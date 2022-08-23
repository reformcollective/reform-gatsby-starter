import * as React from "react"

import InternalLink from "components/InternalLink"
import Layout from "components/Layout"

function TemplateSample() {
  return (
    <Layout>
      <h1>Hello from a template Page</h1>
      <InternalLink to="/">Go back to the homepage</InternalLink>
    </Layout>
  )
}

export default TemplateSample
