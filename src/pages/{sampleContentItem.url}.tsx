import * as React from "react"
import Layout from "components/Layout"
import InternalLink from "components/InternalLink"

const TemplateSample = () => (
  <Layout
    pageAttributes={{
      title: "Using DSG",
      description: "This is the description of the page.",
    }}
  >
    <h1>Hello from a template Page</h1>
    <InternalLink to="/">Go back to the homepage</InternalLink>
  </Layout>
)

export default TemplateSample
