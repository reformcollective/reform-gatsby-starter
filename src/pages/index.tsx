import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "components/Layout"
import InternalLink from "components/InternalLink"

const IndexPage = () => (
  <Layout
    pageAttributes={{
      title: "Home",
      description: "This is the home page.",
    }}
  >
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
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <InternalLink to="/page-2/">Go to page 2</InternalLink> <br />
      <InternalLink to="/using-typescript/">
        Go to "Using TypeScript"
      </InternalLink>
      <br />
    </p>
  </Layout>
)

export default IndexPage
